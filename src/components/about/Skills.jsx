import { skills } from "../../data/skills";
import { GlareHover } from "@/components/ui/glare-hover";

function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {skills.map(({ name, Icon }) => (
        // Tarjeta de la skill.
        <GlareHover
          className="rounded-full"
          duration={550}
          opacity={0.25}
        >
          <div
            key={name}
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200/80 px-3 py-1.5 dark:border-slate-800"
          >
            {/* Icono representativo de la skill. */}
            <Icon size={25} aria-hidden="true" className="shrink-0" />

            {/* Nombre de la skill. */}
            <p className="text-sm font-semibold text-slate-950 sm:text-base dark:text-white">
              {name}
            </p>
          </div>
        </GlareHover>
      ))}
    </div>
  );
}

export default Skills;
