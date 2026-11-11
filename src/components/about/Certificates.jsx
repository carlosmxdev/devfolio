import { learningAchievements } from "../../data/learningAchievements";

function Certificates() {
  return (
    // Contenedor principal que organiza las tarjetas de certificados y adapta su distribución según el tamaño de pantalla.
    <div className="flex flex-col flex-wrap gap-5 md:flex-row md:justify-between">
      {/* Renderizado dinámico de las tarjetas de certificados a partir de los datos de formación y logros académicos. */}
      {learningAchievements.map(
        ({ id, Icon, certificateName, platform, year, linkCertificate }) => (
          // Tarjeta que agrupa la información y los datos de cada certificado.
          <dl
            key={id}
            className="flex flex-1 items-center gap-2 md:flex-none xl:flex-1"
          >
            {/* Icono representativo del certificado. */}
            <Icon
              aria-hidden="true"
              className="size-7.5 shrink-0 text-violet-600 sm:size-8 xl:size-9 2xl:size-10 dark:text-violet-400"
            />

            {/* Contenedor que agrupa el nombre del certificado y los datos de su entidad emisora. */}
            <div className="min-w-0 flex-1">
              {/* Título que identifica el certificado obtenido. */}
              <dt className="text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
                {certificateName}
              </dt>

              {/* Enlace externo que permite consultar el certificado y muestra la entidad emisora junto con el año de obtención. */}
              <a
                href={linkCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm text-slate-600 sm:text-base dark:text-slate-300"
              >
                {platform} {year}
              </a>
            </div>
          </dl>
        ),
      )}
    </div>
  );
}

export default Certificates;
