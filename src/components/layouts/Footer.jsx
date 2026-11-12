import { Link } from "react-router-dom";

import logoClaro from "../../assets/devfolio-logo-w.svg";
import logoOscuro from "../../assets/devfolio-logo-b.svg";

import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-slate-300 bg-white/90 px-4 py-6 text-center text-sm backdrop-blur-xl sm:px-6 lg:px-8 xl:px-12 2xl:px-16 dark:border-slate-800 dark:bg-slate-950/90">
      {/* Logotipo del sitio que funciona como enlace para regresar a la página de inicio. */}
      <Link
        to="/"
        aria-label="Devfolio, ir al inicio"
        className="focus-ring rounded-lg text-xl font-black text-slate-950 dark:text-white"
      >
        {/* Logo para modo claro (se oculta en modo oscuro) */}
        <img
          src={logoClaro}
          alt=""
          className="block h-auto w-9 sm:w-10 lg:w-11 xl:w-12 dark:hidden"
        />

        {/* Logo para modo oscuro (oculto por defecto, se muestra en modo oscuro) */}
        <img
          src={logoOscuro}
          alt=""
          className="hidden h-auto w-9 sm:w-10 lg:w-11 xl:w-12 dark:block"
        />
      </Link>

      <div className="flex items-center gap-3 sm:hidden">
        <a href="https://github.com/carlosmxdev">
          {/* Icono representativo de Github. */}
          <GithubIcon
            size={25}
            aria-hidden="true"
            className="shrink-0 fill-white"
          />
        </a>
        <a href="https://www.linkedin.com/in/carlosmx-dev/">
          {/* Icono representativo de LinkedIn. */}
          <LinkedinIcon
            size={25}
            aria-hidden="true"
            className="shrink-0 fill-white"
          />
        </a>
      </div>

      <span className="text-slate-600 dark:text-slate-300">
        © {currentYear} carlosmxdev. Todos los derechos reservados.
      </span>

      <div className="hidden items-center gap-3 sm:flex">
        <a href="https://github.com/carlosmxdev">
          {/* Icono representativo de Github. */}
          <GithubIcon
            size={25}
            aria-hidden="true"
            className="shrink-0 fill-white"
          />
        </a>
        <a href="https://www.linkedin.com/in/carlosmx-dev/">
          {/* Icono representativo de LinkedIn. */}
          <LinkedinIcon
            size={25}
            aria-hidden="true"
            className="shrink-0 fill-white"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
