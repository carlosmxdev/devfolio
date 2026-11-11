import { useState } from "react";

import { Meteors } from "@/components/ui/meteors";
import { Highlighter } from "@/components/ui/highlighter";

import { projects } from "@/data/projects";

import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectCard from "@/components/projects/ProjectCard";
import CtaGroup from "@/components/shared/CtaGroup";

function Project() {
  // Estado que controla la categoría seleccionada para filtrar los proyectos.
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Lista de proyectos filtrados según la categoría seleccionada.
  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    // Contenedor principal de la sección de proyectos.
    <section className="mx-10 my-4 sm:mx-14 sm:my-6 md:mx-16 md:my-8 lg:mx-20 lg:my-10 xl:mx-24 xl:my-12">
      {/* Contenedor de presentación de la sección de proyectos. */}
      <div className="relative isolate overflow-hidden">
        {/* Efecto de meteoros limitado a este contenedor */}
        <Meteors number={20} />

        {/* Etiqueta decorativa que identifica la sección actual. */}
        <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
          03 / Proyectos
        </span>

        {/* Título principal de la sección. */}
        <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
          Algunos proyectos en los que{" "}
          <Highlighter action="underline" color="#FF9800">
            he trabajado
          </Highlighter>
        </h1>

        {/* Párrafo introductorio sobre los proyectos desarrollados. */}
        <p className="mb-5 text-base leading-6 text-slate-600 sm:text-lg dark:text-slate-300">
          Aquí les muestro algunas cosas interesantes en las que he trabajado,
          ¡no duden en echarles un vistazo!
        </p>

        {/* Componente que presenta los botones de navegación y descarga. */}
        <CtaGroup />
      </div>

      {/* Contenedor de los filtros y las tarjetas de proyectos. */}
      <div className="mt-5">
        {/* Componente que permite filtrar los proyectos según su categoría. */}
        <ProjectFilters
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Contenedor de la cuadrícula de proyectos filtrados. */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Renderizado dinámico de las tarjetas correspondientes a los proyectos filtrados. */}
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
