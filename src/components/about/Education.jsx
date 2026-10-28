import { education } from "../../data/education";

function Education() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {education.map(({ id, Icon, institution, degree, titled }) => (
        // Tarjeta de la carrera.
        <dl key={id} className="flex gap-2">
          {/* Icono representativo de la carrera. */}
          <Icon
            size={30}
            aria-hidden="true"
            className="shrink-0 text-violet-600 dark:text-violet-400"
          />

          {/* Contenedor del nombre de la carrera, nombre de la universidad y año de titulación de la carrera. */}
          <div className="min-w-0 flex-1">
            {/* Nombre de la carrera. */}
            <dt className="text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
              {degree}
            </dt>

            {/* Nombre de la universidad de la carrera. */}
            <dd className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
              {institution}
            </dd>

            {/* Año de titulación de la carrera. */}
            <span className="text-sm text-violet-600 sm:text-base dark:text-violet-400">
              {titled}
            </span>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default Education;
