import { Meteors } from "@/components/ui/meteors";
import { BlurFade } from "@/components/ui/blur-fade";

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
      <div className="relative isolate grid grid-cols-1 overflow-hidden lg:grid-cols-[4fr_2fr]">
        {/* Efecto de meteoros limitado a este contenedor */}
        <Meteors number={20} />

        {/* Contenedor del texto introductorio. */}
        <div>
          {/* Etiqueta decorativa que identifica la sección actual. */}
          <BlurFade delay={0.25} inView>
            <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
              02 / Sobre mí
            </span>
          </BlurFade>

          {/* Título principal de la sección. */}
          <BlurFade delay={0.5} inView>
            <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:mb-6 sm:text-4xl lg:text-5xl dark:text-white">
              Una parte de mí,{" "}
              <span className="text-violet-600 dark:text-violet-400">
                fuera del código
              </span>
            </h1>
          </BlurFade>

          {/* Párrafo introductorio sobre el enfoque profesional. */}
          <BlurFade delay={0.75} inView>
            <p className="mb-6 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
              Soy desarrollador backend y me gusta trabajar en la parte de las
              aplicaciones que hace que todo funcione. Disfruto construir APIs,
              trabajar con bases de datos y encontrar formas de resolver
              problemas sin complicar las cosas más de lo necesario.
            </p>
          </BlurFade>
        </div>

        {/* Contenedor de la imagen ilustrativa de presentación. */}
        <BlurFade delay={1.0} inView>
          <div className="flex items-center justify-center overflow-hidden lg:justify-end">
            {/* Imagen representativa del desarrollador. */}
            <img
              src={developerAvatar}
              alt=""
              className="h-auto w-9/12 object-cover sm:w-5/12 md:w-4/12 lg:w-9/12 xl:w-8/12 2xl:w-6/12"
              decoding="async"
            />
          </div>
        </BlurFade>
      </div>

      {/* Sección de tarjetas con competencias y características profesionales. */}
      <BlurFade delay={1.25} inView>
        <Competencies />
      </BlurFade>

      {/* Sección dedicada a las habilidades técnicas del desarrollador. */}
      <BlurFade delay={1.75} inView>
        <div className="mb-6 rounded-md border-3 border-slate-200/80 p-3 dark:border-slate-800">
          {/* Etiqueta decorativa que identifica la sección de habilidades. */}
          <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
            Mis habilidades
          </span>

          {/* Título de la sección de tecnologías y herramientas. */}
          <h2 className="mb-1 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
            Tecnologías y herramientas
          </h2>

          {/* Párrafo introductorio sobre las competencias técnicas. */}
          <p className="mb-4 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Herramientas que utilizo para construir soluciones robustas y
            escalables.
          </p>

          {/* Componente que muestra la lista de habilidades técnicas. */}
          <Skills />
        </div>
      </BlurFade>

      {/* Sección que agrupa la formación académica y las certificaciones. */}
      <div>
        {/* Etiqueta decorativa que identifica el apartado educativo. */}
        <BlurFade delay={0.25} inView>
          <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
            Educación
          </span>
        </BlurFade>

        {/* Contenedor de la formación académica y de cursos y certificaciones profesionales.*/}
        <div className="grid grid-cols-1 gap-2.5 xl:grid-cols-2 xl:gap-20">
          {/* Contenedor de la formación académica. */}
          <BlurFade delay={0.5} inView>
            <div>
              {/* Título de la sección de estudios realizados. */}
              <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
                Formación Académica
              </h2>

              {/* Componente que presenta los estudios y la formación académica. */}
              <Education />
            </div>
          </BlurFade>

          {/* Contenedor de cursos y certificaciones profesionales. */}
          <BlurFade delay={0.75} inView>
            <div>
              {/* Título de la sección de formación complementaria. */}
              <h2 className="mb-2 text-base font-bold text-slate-950 sm:text-xl dark:text-white">
                Cursos y Certificaciones
              </h2>

              {/* Componente que presenta los cursos y las certificaciones obtenidas. */}
              <Certificates />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default About;
