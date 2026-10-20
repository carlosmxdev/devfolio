import { Link } from "react-router-dom";

import {
  Sparkles,
  MoveUpRight,
  Download,
  Layers,
  FolderTree,
  LaptopMinimal,
  Trophy,
} from "lucide-react";

import codeSetup from "../assets/images/coding-setup.webp";

function Home() {
  return (
    <section>
      <div className="grid grid-cols-1 bg-linear-to-l from-indigo-100 to-white px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:px-8 dark:from-slate-950 dark:to-slate-800">
        {/* Informacion del hero */}
        <div className="py-5">
          {/* Disponiblilidad */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm font-medium text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            <Sparkles size={15} aria-hidden="true" />
            <p>Disponible para trabajar</p>
          </div>

          {/* Titulo*/}
          <h1 className="mb-8 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl xl:text-7xl dark:text-white">
            Construyo soluciones backend escalables para
            <span> productos digitales.</span>
          </h1>

          {/* Descripcion */}
          <p className="mb-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Construyendo la lógica, el rendimiento y la escalabilidad que hacen
            posible grandes experiencias digitales.
          </p>

          {/* Botones */}
          <div className="flex items-center gap-3">
            {/* Ver proyectos */}
            <Link
              to="/proyectos"
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
            >
              Ver proyectos
              <MoveUpRight size={18} aria-hidden="true" />
            </Link>

            {/* Descargar CV */}
            <a
              href="#"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 dark:border-slate-700 dark:text-white dark:hover:border-violet-400/20 dark:hover:bg-violet-400/10 dark:hover:text-violet-300"
            >
              Descargar CV
              <Download size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Imagen ilustrativa del hero */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/*Imagen*/}
          <img
            src={codeSetup}
            alt=""
            className="relative z-10 h-10/12 w-10/12 object-cover drop-shadow-[0_0_10px_rgba(127,34,254,1)]"
            decoding="async"
          />
        </div>
      </div>

      {/* Resumen profesional y metricas */}
      <div className="grid w-full grid-cols-1 grid-rows-4 gap-3 border-y border-violet-200 bg-indigo-50 p-8 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 dark:border-violet-400/20 dark:bg-slate-900">
        {/* Especialidad */}
        <dl className="inline-flex items-center justify-center gap-2">
          <Layers size={30} aria-hidden="true" />
          <div className="w-45">
            <dt className="text-sm font-semibold sm:text-base xl:text-lg">
              Especialidad
            </dt>

            <dd className="text-xs text-slate-600 md:text-sm xl:text-base dark:text-slate-300">
              Backend & Arquitectura
            </dd>
          </div>
        </dl>

        {/* Proyectos */}
        <dl className="inline-flex items-center justify-center gap-2">
          <FolderTree size={30} aria-hidden="true" />
          <div className="w-45">
            <dt className="text-sm font-semibold sm:text-base xl:text-lg">
              Proyectos
            </dt>

            <dd className="text-xs text-slate-600 md:text-sm xl:text-base dark:text-slate-300">
              +7 desarrollados
            </dd>
          </div>
        </dl>

        {/* Experiencia practica */}
        <dl className="inline-flex items-center justify-center gap-2">
          <LaptopMinimal size={30} aria-hidden="true" />
          <div className="w-45">
            <dt className="text-sm font-semibold sm:text-base xl:text-lg">
              Experiencia práctica
            </dt>

            <dd className="text-xs text-slate-600 md:text-sm xl:text-base dark:text-slate-300">
              Proyectos y estadías
            </dd>
          </div>
        </dl>

        {/* Meta */}
        <dl className="inline-flex items-center justify-center gap-2">
          <Trophy size={30} aria-hidden="true" />
          <div className="w-45">
            <dt className="text-sm font-semibold sm:text-base xl:text-lg">
              Meta
            </dt>

            <dd className="text-xs text-slate-600 md:text-sm xl:text-base dark:text-slate-300">
              Impactar con tecnología
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Home;
