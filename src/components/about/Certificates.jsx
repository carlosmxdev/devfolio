import { learningAchievements } from "../../data/learningAchievements";

function Certificates() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {learningAchievements.map(
        ({ id, Icon, certificateName, platform, year }) => (
          <dl key={id} className="flex gap-2">
            <Icon
              size={30}
              aria-hidden="true"
              className="shrink-0 text-violet-600 dark:text-violet-400"
            />
            <div className="min-w-0 flex-1">
              <dt className="mb-1.5 text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
                {certificateName}
              </dt>
              <dd className="text-xs text-slate-600 sm:text-base dark:text-slate-300">
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
