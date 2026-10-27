import { skills } from "../../data/skills";

function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {skills.map(({ name, Icon }) => (
        <div
          key={name}
          className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200/80 px-3 py-1.5 dark:border-slate-800"
        >
          <Icon
            size={20}
            aria-hidden="true"
            className="shrink-0 text-violet-600 dark:text-violet-400"
          />

          <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">
            {name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Skills;
