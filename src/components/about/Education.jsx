import { education } from "../../data/education";

function Education() {
  return (
    // Contenedor principal que organiza las tarjetas de formación académica y adapta su distribución según el tamaño de pantalla.
    <div className="flex flex-col flex-wrap gap-5 md:flex-row md:justify-between">
      {/* Renderizado dinámico de las tarjetas a partir de los datos de formación académica. */}
      {education.map(({ id, Icon, institution, degree, titled }) => (
        // Tarjeta que agrupa la información correspondiente a cada formación académica.
        <dl key={id} className="flex gap-2">
          {/* Icono representativo de la carrera o formación académica. */}
          <Icon
            aria-hidden="true"
            className="size-7.5 shrink-0 text-violet-600 sm:size-9 2xl:size-10 dark:text-violet-400"
          />

          {/* Contenedor que agrupa el nombre de la carrera, la institución educativa y el año de titulación. */}
          <div className="min-w-0 flex-1">
            {/* Nombre de la carrera o programa académico cursado. */}
            <dt className="text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
              {degree}
            </dt>

            {/* Elemento que presenta el nombre de la institución educativa y el año de titulación. */}
            <dd className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
              {institution}
              {" - "}

              {/* Año en que se obtuvo la titulación o se concluyó la formación académica. */}
              <span className="text-sm text-violet-600 sm:text-base dark:text-violet-400">
                {titled}
              </span>
            </dd>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default Education;
