import { education } from "../../data/education";

function Education() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {education.map(({ id, Icon, institution, degree, titled }) => (
        <dl key={id} className="flex gap-2">
          <Icon
            size={30}
            aria-hidden="true"
            className="shrink-0 text-violet-600 dark:text-violet-400"
          />

          <div className="min-w-0 flex-1">
            <dt className="mb-1.5 text-sm font-semibold text-slate-950 sm:text-lg dark:text-white">
              {degree}
            </dt>
            <dd className="text-xs text-slate-600 sm:text-base dark:text-slate-300">
              {institution}
            </dd>
            <span className="text-xs text-violet-600 sm:text-base dark:text-violet-400">
              {titled}
            </span>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default Education;
