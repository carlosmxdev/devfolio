import developerAvatar from "../assets/images/developer-avatar.webp";

import Competencies from "../components/about/Competencies";

import Skills from "../components/about/Skills";
import Education from "../components/about/Education";
import Certificates from "../components/about/Certificates";

function About() {
  return (
    // Contenedor principal de la sección "Sobre mí".
    <section className="mx-10 my-4 sm:mx-14 sm:my-6 md:mx-16 md:my-8 lg:mx-20 lg:my-10 xl:mx-24 xl:my-12">
      {/* Sección de presentación: descripción personal e imagen ilustrativa. */}
      <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr]">
        {/* Contenedor del texto introductorio. */}
        <div>
          {/* Etiqueta decorativa que identifica la sección actual. */}
          <span className="text-sm font-semibold text-violet-600 sm:text-base dark:text-violet-400">
            | Sobre mi
          </span>

          {/* Título principal de la sección. */}
          <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:mb-6 sm:text-4xl lg:text-5xl dark:text-white">
            Apasionado por la tecnologia y el desarrollo web
          </h1>

          {/* Párrafo introductorio sobre el enfoque profesional. */}
          <p className="mb-6 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Construyendo la lógica, el rendimiento y la escalabilidad que hacen
            posible grandes experiencias digitales. Construyendo la lógica, el
            rendimiento y la escalabilidad que hacen posible grandes
            experiencias digitales. Construyendo la lógica, el rendimiento y la
            escalabilidad que hacen posible grandes experiencias digitales.
          </p>
        </div>

        {/* Contenedor de la imagen ilustrativa de presentación. */}
        <div className="flex items-center justify-center overflow-hidden lg:justify-end">
          {/* Imagen representativa del desarrollador. */}
          <img
            src={developerAvatar}
            alt=""
            className="h-auto w-10/12 object-cover sm:w-5/12 md:w-4/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12"
            decoding="async"
          />
        </div>
      </div>

      {/* Sección de tarjetas con competencias y características profesionales. */}
      <Competencies />

      {/* Sección dedicada a las habilidades técnicas del desarrollador. */}
      <div className="mb-6 rounded-md border border-slate-200/80 p-3 dark:border-slate-800">
        {/* Etiqueta decorativa que identifica la sección de habilidades. */}
        <span className="text-sm font-semibold text-violet-600 sm:text-base dark:text-violet-400">
          Mis habilidades
        </span>

        {/* Título de la sección de tecnologías y herramientas. */}
        <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
          Tecnologías y herramientas
        </h2>

        {/* Párrafo introductorio sobre las competencias técnicas. */}
        <p className="mb-4 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
          Construyendo la lógica, el rendimiento y la escalabilidad que hacen
          posible grandes experiencias digitales. Construyendo la lógica, el
          rendimiento y la escalabilidad que hacen posible grandes experiencias
          digitales. Construyendo la lógica, el rendimiento y la escalabilidad
          que hacen posible grandes experiencias digitales.
        </p>

        {/* Componente que muestra la lista de habilidades técnicas. */}
        <Skills />
      </div>

      {/* Sección que agrupa la formación académica y las certificaciones. */}
      <div className="grid grid-cols-1 gap-2.5 xl:grid-cols-2 xl:gap-20">
        {/* Contenedor de la formación académica. */}
        <div>
          {/* Etiqueta decorativa que identifica el apartado educativo. */}
          <span className="text-sm font-semibold text-violet-600 sm:text-base dark:text-violet-400">
            Educación
          </span>

          {/* Título de la sección de estudios realizados. */}
          <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
            Formación Académica
          </h2>

          {/* Componente que presenta los estudios y la formación académica. */}
          <Education />
        </div>

        {/* Contenedor de cursos y certificaciones profesionales. */}
        <div>
          {/* Título de la sección de formación complementaria. */}
          <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
            Cursos y Certificaciones
          </h2>

          {/* Componente que presenta los cursos y las certificaciones obtenidas. */}
          <Certificates />
        </div>
      </div>
    </section>
  );
}

export default About;
