import { competencies } from "../../data/competencies";

function Competencies() {
  return (
    <div className="my-6 grid grid-cols-1 grid-rows-3 gap-3 sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 md:gap-4 lg:grid-cols-3 lg:grid-rows-1">
      {competencies.map(({ id, Icon, title, description }) => (
        // Tarjeta de competencia.
        <dl key={id} className="flex gap-2">
          {/* Icono representativo de la competencia. */}
          <Icon
            size={30}
            aria-hidden="true"
            className="shrink-0 text-violet-600 sm:text-base dark:text-violet-400"
          />

          {/* Contenedor del título y la descripción de la competencia. */}
          <div className="min-w-0 flex-1">
            {/* Título de la competencia. */}
            <dt className="text-base font-semibold text-slate-950 sm:text-lg dark:text-white">
              {title}
            </dt>

            {/* Descripción breve de la competencia. */}
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
