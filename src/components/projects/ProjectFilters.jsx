function ProjectFilters({ activeCategory, setActiveCategory }) {
  // Lista de categorías disponibles para filtrar los proyectos.
  const categories = ["Todos", "Frontend", "Backend", "Fullstack"];

  return (
    // Contenedor de los botones para filtrar los proyectos por categoría.
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-normal">
      {/* Renderizado dinámico de los botones correspondientes a cada categoría. */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            activeCategory === category
              ? "focus-ring bg-violet-600 text-white"
              : "focus-ring border-2 border-slate-300 p-3 text-slate-600 hover:border-violet-600 hover:text-violet-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;
