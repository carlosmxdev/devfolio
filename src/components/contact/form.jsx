import { Send } from "lucide-react";

function Form() {
  return (
    <div>
      <div className="rounded-lg border-2 border-slate-300/80 p-7 dark:border-slate-800">
        <h2 className="mb-3 text-lg font-semibold text-violet-600 sm:text-2xl dark:text-violet-400">
          Envíame un correo
        </h2>

        <form action="">
          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="user_name" className="text-base sm:text-lg">
              Nombre completo
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Hugo Perez Lopez"
              required
              maxLength={100}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          <div className="mb-5 flex flex-col justify-center gap-1">
            <label htmlFor="user_email" className="text-base sm:text-lg">
              Correo electrónico
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="tucorreo@sitio.com"
              required
              maxLength={100}
              className="focus-ring rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

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
              maxLength={3000}
              className="focus-ring field-sizing-content w-full rounded-md border-2 border-slate-300/80 bg-violet-50 p-1.5 text-base sm:text-lg dark:border-slate-800 dark:bg-violet-400/10"
            />
          </div>

          <button className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-700 sm:text-lg">
            <Send size={17} aria-hidden="true" className="shrink-0" />
            Enviar correo
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
