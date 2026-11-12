import { Link, useLocation } from "react-router-dom";

import { MoveUpRight, Download } from "lucide-react";

function CtaGroup() {
  // Obtenemos la ruta actual de la aplicación.
  const { pathname } = useLocation();
  const isProjectsPage = pathname === "/proyectos";

  return (
    // Contenedor de los botones de navegación y descarga.
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-normal">
      {/* Enlace de navegación hacia la página de proyectos. */}
      {!isProjectsPage && (
        <Link
          to="/proyectos"
          className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-700 sm:w-auto sm:text-lg"
        >
          {/* Texto del enlace a proyectos. */}
          Ver proyectos
          {/* Icono decorativo que acompaña el enlace a proyectos. */}
          <MoveUpRight size={18} aria-hidden="true" />
        </Link>
      )}

      {/* Enlace para descargar el currículum vitae. */}
      <a
        href="/cv-cams.pdf"
        download="cv-cams.pdf"
        className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-base text-slate-800 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 sm:w-auto sm:justify-normal sm:text-lg dark:border-slate-700 dark:text-white dark:hover:border-violet-400/20 dark:hover:bg-violet-400/10 dark:hover:text-violet-300"
      >
        {/* Texto del enlace de descarga del currículum vitae. */}
        Descargar CV
        {/* Icono decorativo que acompaña el enlace de descarga. */}
        <Download size={18} aria-hidden="true" />
      </a>
    </div>
  );
}

export default CtaGroup;
