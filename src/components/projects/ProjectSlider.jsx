import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectSlider({ images, title }) {
  // Estado que controla el índice de la imagen actualmente seleccionada.
  const [currentImage, setCurrentImage] = useState(0);

  // Efecto que cambia automáticamente la imagen cada 5 segundos.
  useEffect(() => {
    if (images.length <= 1) return;

    // Actualización del índice para avanzar automáticamente a la siguiente imagen.
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    // Limpieza del intervalo para evitar ejecuciones cuando el efecto se desmonta o se actualiza.
    return () => clearInterval(interval);
  }, [images]);

  // Función que permite retroceder a la imagen anterior del slider.
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Función que permite avanzar a la siguiente imagen del slider.
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Condición que evita renderizar el slider cuando no existen imágenes disponibles.
  if (!images?.length) return null;

  return (
    // Contenedor principal del slider de imágenes.
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
      {/* Renderizado dinámico de las imágenes del proyecto con transición de opacidad. */}
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${title} - Captura ${index + 1}`}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          decoding="async"
        />
      ))}

      {/* Controles de navegación que se muestran cuando existe más de una imagen. */}
      {images.length > 1 && (
        <>
          {/* Botón para retroceder a la imagen anterior. */}
          <button
            onClick={prevImage}
            aria-label="Imagen anterior"
            className="focus-ring absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70 focus:opacity-100"
          >
            {/* Icono que representa la acción de retroceder a la imagen anterior. */}
            <ChevronLeft size={20} />
          </button>

          {/* Botón para avanzar a la imagen siguiente. */}
          <button
            onClick={nextImage}
            aria-label="Imagen siguiente"
            className="focus-ring absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70 focus:opacity-100"
          >
            {/* Icono que representa la acción de avanzar a la imagen siguiente. */}
            <ChevronRight size={20} />
          </button>

          {/* Contenedor de los indicadores que representan la posición de cada imagen. */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {/* Renderizado dinámico de los indicadores para seleccionar una imagen específica. */}
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`Mostrar imagen ${index + 1}`}
                aria-current={currentImage === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImage === index
                    ? "focus-ring w-6 bg-violet-600 dark:bg-violet-400"
                    : "focus-ring w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectSlider;
