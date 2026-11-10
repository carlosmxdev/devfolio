import ProjectSlider from "@/components/projects/ProjectSlider";
import IconBadgeList from "@/components/shared/IconBadgeList";
import { ArrowRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    // Contenedor principal de la tarjeta que presenta la información de cada proyecto.
    <article className="overflow-hidden rounded-xl border-2 border-slate-300 p-1 transition-all duration-300 hover:-translate-y-1 hover:border-violet-600 dark:border-slate-800 dark:hover:border-violet-400">
      {/* Componente que presenta el slider de imágenes del proyecto. */}
      <ProjectSlider images={project.images} title={project.title} />

      {/* Contenedor de la información descriptiva del proyecto. */}
      <div className="px-5 py-3">
        {/* Etiqueta que identifica la categoría a la que pertenece el proyecto. */}
        <span className="mb-1 text-xs font-semibold text-violet-600 sm:text-sm dark:text-violet-400">
          &lt;/ {project.category} &gt;
        </span>

        {/* Título que identifica el nombre del proyecto. */}
        <h3 className="mb-2.5 text-lg font-bold sm:text-xl">{project.title}</h3>

        {/* Componente que presenta las tecnologías y herramientas utilizadas en el proyecto. */}
        <IconBadgeList
          items={project.technologies}
          className="text-xs sm:text-sm"
          size={20}
        />

        {/* Enlace que permite acceder al proyecto presentado. */}
        <a
          href={project.link}
          className="focus-ring mt-3.5 flex items-center justify-end gap-1 text-sm text-slate-600 hover:text-violet-600 sm:text-lg dark:text-slate-300 dark:hover:text-violet-400"
        >
          Ver proyecto
          {/* Icono que representa la acción de acceder al proyecto. */}
          <ArrowRight aria-hidden="true" size={13} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
