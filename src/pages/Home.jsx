import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Sparkles, MoveUpRight, Download } from "lucide-react";

import IlustracionHome from "@/assets/images/IlustracionHome";

import { Particles } from "@/components/ui/particles";
import { AuroraText } from "@/components/ui/aurora-text";

function Home() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const color = isDark ? "#ffffff" : "#000000";

  return (
    <section className="relative isolate z-10 overflow-hidden px-8 py-5 sm:px-16 sm:py-10 xl:px-30 xl:py-10">
      {/* Contenedor del contenido principal y la imagen ilustrativa. */}
      <div className="grid grid-cols-1">
        {/* Contenedor de la información principal del hero. */}
        <div className="flex flex-col items-center justify-center text-center sm:mb-6 lg:mb-0">
          {/* Indicador de disponibilidad laboral. */}
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 2xl:text-base dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            {/* Icono decorativo que acompaña el indicador de disponibilidad. */}
            <Sparkles size={15} aria-hidden="true" />

            {/* Texto que indica la disponibilidad para trabajar. */}
            <span>Disponible para trabajar</span>
          </div>

          {/* Título principal de presentación profesional. */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl 2xl:text-7xl dark:text-white">
            Construyo soluciones backend escalables para
            <AuroraText> productos digitales.</AuroraText>
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
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-base font-semibold text-white transition hover:bg-violet-700 sm:w-auto sm:text-lg"
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
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-base text-slate-800 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 sm:w-auto sm:justify-normal sm:text-lg dark:border-slate-700 dark:text-white dark:hover:border-violet-400/20 dark:hover:bg-violet-400/10 dark:hover:text-violet-300"
            >
              {/* Texto del enlace de descarga del currículum vitae. */}
              Descargar CV
              {/* Icono decorativo que acompaña el enlace de descarga. */}
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Contenedor de la imagen ilustrativa del hero. */}
        <div className="mt-10 flex items-center justify-center overflow-hidden sm:mt-5 lg:mt-10">
          {/* Imagen representativa del entorno de desarrollo. */}
          <IlustracionHome className="block h-auto w-9/12 lg:w-8/12 xl:w-7/12" />
        </div>
      </div>

      {/* Animación de particulas */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        size={1}
        refresh
      />
    </section>
  );
}

export default Home;
