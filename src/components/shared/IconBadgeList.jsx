import { GlareHover } from "@/components/ui/glare-hover";

export default function IconBadgeList({
  items = [],
  className = "text-sm font-semibold text-slate-950 sm:text-base dark:text-white",
  size = 25,
}) {
  return (
    // Contenedor de las tarjetas con iconos y nombres de los elementos.
    <div className="flex flex-wrap items-center justify-center gap-3">
      {/* Renderizado dinámico de las tarjetas a partir de la lista de elementos recibida. */}
      {items.map(({ technology, Icon }) => (
        // Efecto visual aplicado a cada tarjeta de la lista.
        <GlareHover
          className="rounded-full"
          duration={550}
          opacity={0.25}
          key={technology}
        >
          {/* Contenedor de la tarjeta que agrupa el icono y el nombre del elemento. */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-3 py-1.5 dark:border-slate-800">
            {/* Icono representativo del elemento. */}
            <Icon size={size} aria-hidden="true" className="shrink-0" />

            {/* Nombre descriptivo del elemento. */}
            <p className={className}>{technology}</p>
          </div>
        </GlareHover>
      ))}
    </div>
  );
}
