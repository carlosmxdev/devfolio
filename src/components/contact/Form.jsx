
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, LoaderCircle } from "lucide-react";

function Form() {
  // Estado para controlar el envío del formulario.
  const [isSending, setIsSending] = useState(false);

  // Estado para mostrar mensajes de respuesta.
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // Función para procesar el envío del formulario.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Evita múltiples envíos simultáneos.
    if (isSending) return;

    setIsSending(true);

    // Limpia cualquier mensaje anterior.
    setStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Parámetros que recibirá la plantilla de EmailJS.
    const templateParams = {
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      // Envía el correo mediante EmailJS.
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      // Muestra el mensaje de éxito.
      setStatus({
        type: "success",
        message:
          "¡Mensaje enviado correctamente! Gracias por contactarme.",
      });

      // Limpia los campos después del envío exitoso.
      form.reset();
    } catch (error) {
      // Registra el error en la consola.
      console.error("Error al enviar el correo:", error);

      // Muestra el mensaje de error.
      setStatus({
        type: "error",
        message:
          "No se pudo enviar el mensaje. Inténtalo nuevamente.",
      });
    } finally {
      // Finaliza el estado de carga.
      setIsSending(false);
    }
  };

  return (
    <div>
      <div className="rounded-lg border-2 border-slate-300/80 p-7 dark:border-slate-800">
        <h2 className="mb-3 text-lg font-semibold text-violet-600 sm:text-2xl dark:text-violet-400">
          Envíame un correo
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Campo de correo electrónico. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label
              htmlFor="user_email"
              className="text-base sm:text-lg"
            >
              Correo electrónico
            </label>

            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="tucorreo@sitio.com"
              required
              maxLength={100}
              autoComplete="email"
              disabled={isSending}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          {/* Campo del mensaje. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label
              htmlFor="message"
              className="text-base sm:text-lg"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Mensaje..."
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              disabled={isSending}
              className="focus-ring w-full resize-y rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          {/* Mensaje de respuesta del envío. */}
          {status.message && (
            <p
              role="status"
              aria-live="polite"
              className={`mb-5 rounded-md p-3 text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-100 text-green-700 dark:bg-green-400/10 dark:text-green-400"
                  : "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}

          {/* Botón de envío. */}
          <button
            type="submit"
            disabled={isSending}
            className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
          >
            {isSending ? (
              <>
                <LoaderCircle
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 animate-spin"
                />
                Enviando...
              </>
            ) : (
              <>
                <Send
                  size={17}
                  aria-hidden="true"
                  className="shrink-0"
                />
                Enviar correo
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
