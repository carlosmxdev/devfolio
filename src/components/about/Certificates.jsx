import { learningAchievements } from "../../data/learningAchievements";

function Certificates() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {learningAchievements.map(
        ({ id, Icon, certificateName, platform, year }) => (
          // Tarjeta del certificado.
          <dl key={id} className="flex gap-2">
            {/* Icono representativo del certificado. */}
            <Icon
              size={30}
              aria-hidden="true"
              className="shrink-0 text-violet-600 dark:text-violet-400"
            />

            {/* Contenedor del título y nombre de la plataforma o persona que emite el certificado. */}
            <div className="min-w-0 flex-1">
              {/* Título del certificado. */}
              <dt className="text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
                {certificateName}
              </dt>

              {/* Nombre de la plataforma o persona que emite el certificado. */}
              <dd className="text-sm text-slate-600 sm:text-base dark:text-slate-300">
                {platform}{" "}
                <span className="text-violet-600 dark:text-violet-400">
                  | {year}
                </span>
              </dd>
            </div>
          </dl>
        ),
      )}
    </div>
  );
}

export default Certificates;
