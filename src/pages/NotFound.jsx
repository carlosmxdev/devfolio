import { Link } from "react-router-dom";

import { House } from "lucide-react";

import error from "../assets/images/error-404.webp";
import gato from "../assets/images/gato-404.webp";

function NotFound() {
  return (
    // Contenedor principal de la página 404.
    <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#121821]">
      {/* Elementos SVG decorativos del fondo. */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Onda decorativa de la esquina superior izquierda. */}
        <path
          className="fill-[#0f141c]"
          d="
        M 0 0
        H 230
        C 205 5, 190 25, 160 43
        C 130 62, 105 65, 78 59
        C 48 53, 20 75, 0 105
        Z
      "
        />

        {/* Onda decorativa de la esquina inferior derecha. */}
        <path
          className="fill-[#0f141c]"
          d="
        M 430 800
        C 470 775, 490 735, 535 710
        C 580 680, 625 685, 675 695
        C 725 705, 760 690, 800 680
        C 855 665, 895 625, 930 640
        C 955 648, 980 660, 1000 665
        L 1000 800
        Z
      "
        />
      </svg>

      {/* Contenedor principal del contenido. */}
      <div className="grid h-full w-full grid-cols-1 items-center justify-center sm:grid-cols-2 sm:justify-normal sm:px-5 md:px-10 lg:px-20 xl:px-30 2xl:px-40">
        {/* Contenedor de información del error. */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
          {/* Imagen principal del error 404. */}
          <img src={error} alt="" className="h-auto w-9/12" />

          {/* Mensaje principal de error. */}
          <p className="mt-2 mb-2 text-5xl text-slate-950 dark:text-white">
            ¡Ups!
          </p>

          {/* Título descriptivo del error. */}
          <p className="mb-4 text-2xl text-slate-950 dark:text-white">
            La página que buscas no esta aquí.
          </p>

          {/* Descripción del error. */}
          <p className="mb-8 text-base text-slate-600 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 dark:text-slate-300">
            Puede que haya sido eliminada, cambiada de lugar o simplemente nunca
            existió.
          </p>

          {/* Enlace para regresar a la página principal. */}
          <Link
            to="/"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-base text-white hover:bg-violet-700"
          >
            {/* Icono del enlace de navegación. */}
            <House size={20} aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>

        {/* Contenedor de la ilustración secundaria. */}
        <div className="mt-6 flex items-center justify-center sm:mt-0 sm:justify-end">
          {/* Ilustración complementaria de la página 404. */}
          <img
            src={gato}
            alt=""
            className="h-auto w-9/12 sm:w-11/12 md:w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
