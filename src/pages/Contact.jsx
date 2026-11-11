import { Mail } from "lucide-react";

import { Highlighter } from "@/components/ui/highlighter";
import { Meteors } from "@/components/ui/meteors";

import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";

import Form from "../components/contact/Form";

function Contact() {
  return (
    // Componente principal que contiene la sección de contacto y organiza su distribución en columnas según el tamaño de pantalla.
    <section className="mx-10 my-4 grid grid-cols-1 gap-10 sm:mx-14 sm:my-6 md:mx-16 md:my-8 lg:mx-20 lg:my-10 xl:mx-24 xl:my-12 xl:grid-cols-2">
      {/* Contenedor que agrupa los elementos informativos y los medios de contacto. */}
      <div className="relative isolate z-10 overflow-hidden">
        {/* Efecto de meteoros limitado a este contenedor */}
        <Meteors number={20} />

        {/* Etiqueta decorativa que identifica la sección actual. */}
        <span className="flex items-center gap-1 text-sm font-semibold text-violet-600 before:block before:h-0.5 before:w-5 before:bg-violet-600 before:content-[''] sm:text-base dark:text-violet-400 dark:before:bg-violet-400">
          04 / Contacto
        </span>

        {/* Título principal de la sección. */}
        <h1 className="mb-4 text-3xl font-bold text-slate-950 sm:mb-6 sm:text-4xl lg:text-5xl xl:text-6xl dark:text-white">
          ¿Necesitas incorporar talento{" "}
          {/* Efecto de resaltado aplicado al texto del título. */}
          <Highlighter action="underline" color="#FF9800">
            a tu equipo
          </Highlighter>
          ?
        </h1>

        {/* Párrafo introductorio que comunica la disponibilidad y el interés por nuevas oportunidades profesionales. */}
        <p className="mb-6 text-base leading-6 text-slate-600 sm:text-lg dark:text-slate-300">
          Si buscas un desarrollador comprometido, con ganas de aprender y
          pasión por la tecnología, me encantaría conocerte.
        </p>

        {/* Contenedor que agrupa los diferentes medios de contacto y redes profesionales. */}
        <div className="flex flex-col gap-2.5">
          {/* Contenedor de la dirección de correo electrónico. */}
          <div className="inline-flex items-center gap-2">
            {/* Icono representativo del correo electrónico. */}
            <Mail
              size={30}
              aria-hidden="true"
              className="shrink-0 text-violet-600 dark:text-violet-400"
            />

            {/* Texto que presenta la dirección de correo electrónico. */}
            <span className="text-slate-950 hover:text-violet-600 dark:text-white dark:hover:text-violet-400">
              carlosmx.dev@gmail.com
            </span>
          </div>

          {/* Contenedor del perfil profesional de LinkedIn. */}
          <div className="inline-flex items-center gap-2">
            {/* Icono representativo de LinkedIn. */}
            <LinkedinIcon size={30} aria-hidden="true" className="shrink-0" />

            {/* Enlace al perfil profesional de LinkedIn. */}
            <a
              href="https://www.linkedin.com/in/carlosmx-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-base text-slate-950 hover:text-violet-600 sm:text-lg dark:text-white dark:hover:text-violet-400"
            >
              linkedin.com/in/carlosmx-dev
            </a>
          </div>

          {/* Contenedor del perfil de GitHub. */}
          <div className="inline-flex items-center gap-2">
            {/* Icono representativo de GitHub. */}
            <GithubIcon size={30} aria-hidden="true" className="shrink-0" />

            {/* Enlace al perfil de GitHub. */}
            <a
              href="https://github.com/carlosmxdev"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-base text-slate-950 hover:text-violet-600 sm:text-lg dark:text-white dark:hover:text-violet-400"
            >
              github.com/carlosmxdev
            </a>
          </div>

          {/* Contenedor del perfil de GitHub (proyectos académicos). */}
          <div className="inline-flex items-center gap-2">
            {/* Icono representativo de GitHub. */}
            <GithubIcon size={30} aria-hidden="true" className="shrink-0" />

            {/* Enlace al perfil de GitHub (proyectos académicos). */}
            <a
              href="https://github.com/CarlosMS01"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-base text-slate-950 hover:text-violet-600 sm:text-lg dark:text-white dark:hover:text-violet-400"
            >
              github.com/CarlosMS01 (Proyectos académicos)
            </a>
          </div>
        </div>
      </div>

      {/* Componente que presenta el formulario para enviar mensajes de contacto. */}
      <Form />
    </section>
  );
}

export default Contact;
