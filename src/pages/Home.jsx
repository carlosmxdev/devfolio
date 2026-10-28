import { Link } from "react-router-dom";

import { Sparkles, MoveUpRight, Download } from "lucide-react";

import codeSetup from "../assets/images/coding-setup.webp";

function Home() {
  return (
    <section className="px-8 py-5 sm:px-16 sm:py-10 xl:px-8 xl:py-5">
      {/* Contenedor del contenido principal y la imagen ilustrativa. */}
      <div className="grid grid-cols-1 xl:grid-cols-[3fr_2fr]">
        {/* Contenedor de la información principal del hero. */}
        <div className="sm:mb-6 lg:mb-0">
          {/* Indicador de disponibilidad laboral. */}
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 sm:text-base dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            {/* Icono decorativo que acompaña el indicador de disponibilidad. */}
            <Sparkles size={15} aria-hidden="true" />

            {/* Texto que indica la disponibilidad para trabajar. */}
            <span>Disponible para trabajar</span>
          </div>

          {/* Título principal de presentación profesional. */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl 2xl:text-7xl dark:text-white">
            Construyo soluciones backend escalables para
            <span className="text-violet-600 dark:text-violet-400">
              {" "}
              productos digitales.
            </span>
          </h1>

          {/* Párrafo descriptivo sobre el enfoque profesional. */}
          <p className="mb-5 text-base text-slate-600 sm:text-lg dark:text-slate-300">
            Construyo la lógica, el rendimiento y la escalabilidad que hacen
            posible grandes experiencias digitales.
          </p>

          {/* Contenedor de los botones de navegación y descarga. */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-normal">
            {/* Enlace de navegación hacia la página de proyectos. */}
            <Link
              to="/proyectos"
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-700 sm:w-auto"
            >
              {/* Texto del enlace a proyectos. */}
              Ver proyectos
              {/* Icono decorativo que acompaña el enlace a proyectos. */}
              <MoveUpRight size={18} aria-hidden="true" />
            </Link>

            {/* Enlace para descargar el currículum vitae. */}
            <a
              href="#"
              download
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-base text-slate-800 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 sm:w-auto sm:justify-normal dark:border-slate-700 dark:text-white dark:hover:border-violet-400/20 dark:hover:bg-violet-400/10 dark:hover:text-violet-300"
            >
              {/* Texto del enlace de descarga del currículum vitae. */}
              Descargar CV
              {/* Icono decorativo que acompaña el enlace de descarga. */}
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contenedor de la imagen ilustrativa del hero. */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Imagen representativa del entorno de desarrollo. */}
          <img
            src={codeSetup}
            alt=""
            className="relative z-10 h-auto w-10/12 object-cover drop-shadow-[0_0_10px_rgba(127,34,254,1)] sm:w-9/12 lg:w-7/12 xl:w-8/12"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
