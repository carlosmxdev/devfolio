import { GlareHover } from "@/components/ui/glare-hover";

export default function IconBadgeList({
  items = [],
  labelKey = "id",
  className = "font-semibold text-slate-950 sm:text-base dark:text-white",
  size = 25,
}) {
  return (
    // Contenedor de las tarjetas con iconos y nombres.
    <div className="flex flex-wrap items-center justify-center gap-3">
      {/* Renderizado dinámico de los elementos recibidos. */}
      {items.map((item) => {
        const { Icon } = item;

        return (
          // Efecto visual aplicado a cada tarjeta.
          <GlareHover
            key={item[labelKey]}
            className="rounded-full"
            duration={550}
            opacity={0.25}
          >
            {/* Contenedor de la tarjeta. */}
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-3 py-1.5 dark:border-slate-800">
              {/* Icono representativo. */}
              <Icon size={size} aria-hidden="true" className="shrink-0" />

              {/* Nombre descriptivo. */}
              <p className={className}>{item[labelKey]}</p>
            </div>
          </GlareHover>
        );
      })}
    </div>
  );
}
