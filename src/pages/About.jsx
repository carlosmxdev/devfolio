import { Meteors } from "@/components/ui/meteors";

import avatar from "@/assets/images/avatar-completo.webp";

import Competencies from "../components/about/Competencies";

import { skills } from "@/data/skills";
import IconBadgeList from "@/components/shared/IconBadgeList";

import Education from "../components/about/Education";
import Certificates from "../components/about/Certificates";

import { learningAchievements } from "../data/learningAchievements";
import Section from "@/components/shared/Section";

function About() {
  return (
    // Contenedor principal de la sección "Sobre mí".
    <section className="mx-10 my-4 sm:mx-14 sm:my-6 md:mx-16 md:my-8 lg:mx-20 lg:my-10 xl:mx-24 xl:my-12">
      {/* Contenedor que organiza la presentación personal y la imagen ilustrativa en una distribución adaptable.. */}
      <div className="relative isolate grid grid-cols-1 overflow-hidden lg:grid-cols-[4fr_2fr]">
        {/* Efecto de meteoros limitado a este contenedor */}
        <Meteors number={20} />

        {/* Contenedor del texto introductorio. */}
        <div>
          {/* Etiqueta decorativa que identifica la sección actual. */}
          <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
            02 / Sobre mí
          </span>

          {/* Título principal de la sección. */}
          <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
            Una parte de mí,{" "}
            <span className="text-violet-600 dark:text-violet-400">
              fuera del código
            </span>
          </h1>

          {/* Párrafo introductorio sobre el enfoque profesional. */}
          <p className="mb-6 text-base leading-6 text-slate-600 sm:text-lg dark:text-slate-300">
            Soy desarrollador backend y me gusta trabajar en la parte de las
            aplicaciones que hace que todo funcione. Disfruto construir APIs,
            trabajar con bases de datos y encontrar formas de resolver problemas
            sin complicar las cosas más de lo necesario.
          </p>
        </div>

        {/* Contenedor que organiza y posiciona la imagen ilustrativa junto al texto de presentación. */}
        <div className="flex items-center justify-center overflow-hidden lg:justify-end">
          {/* Imagen representativa del desarrollador utilizada en la presentación personal. */}
          <img
            src={avatar}
            alt=""
            className="h-auto w-7/12 object-cover sm:w-4/12 md:w-3/12 lg:w-9/12 xl:w-7/12 2xl:w-6/12"
            decoding="async"
          />
        </div>
      </div>

      {/* Componente que presenta las competencias y características profesionales del desarrollador. */}
      <Competencies />

      {/* Sección reutilizable que agrupa las habilidades técnicas y sus elementos de presentación. */}
      <Section
        items={learningAchievements}
        labelSection="Mis habilidades"
        titleSection="Tecnologías y herramientas"
        paragraphSection="Herramientas que utilizo para construir soluciones robustas y
          escalables."
        className="mb-6 rounded-md border-3 border-slate-200/80 p-3 dark:border-slate-800"
        componentSection={Certificates}
      >
        {/* Componente que presenta las tecnologías y herramientas utilizadas mediante una lista de insignias con sus respectivos iconos. */}
        <IconBadgeList
          items={skills}
          labelKey="name"
          className="text-xs sm:text-sm"
          size={25}
        />
      </Section>

      {/* Sección reutilizable que agrupa la información correspondiente a la formación académica. */}
      <Section
        items={learningAchievements}
        labelSection="Educación"
        titleSection="Formación académica"
        className="mb-7"
      >
        {/* Componente que presenta los estudios y la trayectoria de formación académica. */}
        <Education />
      </Section>

      {/* Sección reutilizable que agrupa los cursos y las certificaciones obtenidas. */}
      <Section
        items={learningAchievements}
        labelSection="Mis certificados"
        titleSection="Cursos y certificaciones"
      >
        {/* Componente que presenta la lista de cursos y certificaciones profesionales.  */}
        <Certificates />
      </Section>
    </section>
  );
}

export default About;
