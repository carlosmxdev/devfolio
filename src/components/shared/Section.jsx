// Componente reutilizable que permite estructurar secciones con una etiqueta, un título, un párrafo introductorio y contenido personalizado.
export default function Section({
  className = "",
  labelSection = "",
  titleSection = "",
  paragraphSection = "",
  children,
}) {
  return (
    // Contenedor principal que agrupa los elementos de presentación y el contenido de la sección.
    <div className={className}>
      {/* Etiqueta decorativa que identifica la sección. */}
      {labelSection && (
        <span className="flex items-center text-sm font-semibold text-violet-600 sm:text-base dark:text-violet-400">
          &lt;/ {labelSection} &gt;
        </span>
      )}

      {/* Título que presenta el contenido principal de la sección. */}
      {titleSection && (
        <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
          {titleSection}
        </h2>
      )}

      {/* Párrafo introductorio que proporciona contexto sobre el contenido de la sección. */}
      {paragraphSection && (
        <p className="mb-4 text-base leading-6 text-slate-600 sm:text-lg dark:text-slate-300">
          {paragraphSection}
        </p>
      )}

      {/* Contenido dinámico que permite insertar componentes o elementos personalizados dentro de la sección. */}
      {children}
    </div>
  );
}
