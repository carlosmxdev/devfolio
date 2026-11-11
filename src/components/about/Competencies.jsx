import { competencies } from "../../data/competencies";

function Competencies() {
  return (
    // Contenedor principal que organiza las tarjetas de competencias en una cuadrícula adaptable al tamaño de pantalla.
    <div className="mt-6 mb-10 grid grid-cols-1 grid-rows-3 gap-3 sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 md:gap-4 lg:grid-cols-3 lg:grid-rows-1">
      {/* Renderizado dinámico de las tarjetas a partir de la información de competencias profesionales. */}
      {competencies.map(({ id, Icon, title, description }) => (
        // Tarjeta que agrupa el icono, el título y la descripción de cada competencia.
        <dl key={id} className="flex gap-2">
          {/* Icono representativo de la competencia. */}
          <Icon
            size={30}
            aria-hidden="true"
            className="shrink-0 text-violet-600 dark:text-violet-400"
          />

          {/* Contenedor que agrupa el título y la descripción de la competencia. */}
          <div className="min-w-0 flex-1">
            {/* Título que identifica la competencia profesional. */}
            <dt className="text-base font-semibold text-slate-950 sm:text-lg dark:text-white">
              {title}
            </dt>

            {/* Descripción breve que explica las características de cada competencia. */}
            <dd className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
              {description}
            </dd>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default Competencies;
