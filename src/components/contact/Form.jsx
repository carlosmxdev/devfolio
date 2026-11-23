import { useState } from "react";
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

    // Datos que recibirá nuestro backend.
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website"),
    };

    try {
      // Envía los datos a nuestra API.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      // Comprueba si el backend rechazó la solicitud.
      if (!response.ok) {
        throw new Error(result.message || "No fue posible enviar el mensaje.");
      }

      // Muestra el mensaje de éxito.
      setStatus({
        type: "success",
        message: "¡Mensaje enviado correctamente! Gracias por contactarme.",
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
          error.message ||
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
          {/* Campo Honeypot. */}
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="website">No completar este campo</label>

            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Campo del nombre. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="name" className="text-base sm:text-lg">
              Nombre
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              disabled={isSending}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          {/* Campo del correo electrónico. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="email" className="text-base sm:text-lg">
              Correo electrónico
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@sitio.com"
              required
              maxLength={254}
              autoComplete="email"
              disabled={isSending}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          {/* Campo del asunto. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="subject" className="text-base sm:text-lg">
              Asunto
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Asunto del mensaje"
              required
              minLength={3}
              maxLength={120}
              disabled={isSending}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          {/* Campo del mensaje. */}
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="message" className="text-base sm:text-lg">
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Mensaje..."
              required
              minLength={10}
              maxLength={5000}
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
                <Send size={17} aria-hidden="true" className="shrink-0" />
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
