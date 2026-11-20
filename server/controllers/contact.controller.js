import { contactSchema } from "../validators/contact.schema.js";
import { sendContactEmail } from "../services/email.service.js";

import { contactRateLimit } from "../middleware/rate-limit.js";
import { getClientIp } from "../utils/get-client-ip.js";
import { isAllowedOrigin } from "../config/allowed-origins.js";

const MAX_BODY_SIZE = 10 * 1024; // 10 KB

function getBodySize(body) {
  if (Buffer.isBuffer(body)) {
    return body.length;
  }

  if (typeof body === "string") {
    return Buffer.byteLength(body, "utf8");
  }

  if (body === undefined || body === null) {
    return 0;
  }

  return Buffer.byteLength(JSON.stringify(body), "utf8");
}

export async function handleContact(req, res) {
  // Verificar el método HTTP
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);

    return res.status(405).json({
      success: false,
      message: "Método HTTP no permitido.",
    });
  }

  // Verificar que el origen esté autorizado
  if (!isAllowedOrigin(req)) {
    return res.status(403).json({
      success: false,
      message: "Origen no autorizado.",
    });
  }

  // Comprobar el tamaño declarado de la petición
  const contentLength = req.headers["content-length"];

  if (contentLength !== undefined && Number(contentLength) > MAX_BODY_SIZE) {
    return res.status(413).json({
      success: false,
      message: "El contenido de la solicitud es demasiado grande.",
    });
  }

  // Comprobar el tamaño del contenido recibido
  const bodySize = getBodySize(req.body);

  if (bodySize > MAX_BODY_SIZE) {
    return res.status(413).json({
      success: false,
      message: "El contenido de la solicitud es demasiado grande.",
    });
  }

  try {
    // Validar los datos recibidos
    const validation = contactSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: "Los datos proporcionados no son válidos.",
        errors: validation.error.flatten().fieldErrors,
      });
    }

    // Obtener únicamente los datos validados
    const { name, email, subject, message, website } = validation.data;

    // Detectar posibles bots mediante Honeypot
    if (website) {
      return res.status(400).json({
        success: false,
        message: "No fue posible procesar tu solicitud.",
      });
    }

    // Identificar al visitante
    const ip = getClientIp(req);

    // No permitir envíos si no podemos identificar al visitante
    if (!ip) {
      return res.status(503).json({
        success: false,
        message: "No fue posible procesar tu solicitud. Inténtalo más tarde.",
      });
    }

    // Comprobar el límite de solicitudes en Upstash
    let rateLimitResult;

    try {
      rateLimitResult = await contactRateLimit.limit(ip);
    } catch (error) {
      console.error("Error al consultar Upstash Redis:", error);

      return res.status(503).json({
        success: false,
        message:
          "El servicio no está disponible temporalmente. Inténtalo más tarde.",
      });
    }

    const { success, reset } = rateLimitResult;

    if (!success) {
      const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));

      res.setHeader("Retry-After", retryAfter);

      return res.status(429).json({
        success: false,
        message: "Has alcanzado el límite de envíos. Inténtalo más tarde.",
        retryAfter,
      });
    }

    // Enviar el correo mediante Gmail SMTP
    try {
      await sendContactEmail({
        name,
        email,
        subject,
        message,
      });
    } catch (error) {
      console.error("Error al enviar el correo mediante Gmail SMTP:", error);

      return res.status(503).json({
        success: false,
        message:
          "No fue posible enviar tu mensaje en este momento. Inténtalo más tarde.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tu mensaje se ha enviado correctamente.",
    });
  } catch (error) {
    console.error("Error inesperado al procesar el formulario:", error);

    return res.status(500).json({
      success: false,
      message: "Ocurrió un error inesperado. Inténtalo más tarde.",
    });
  }
}
