import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X, ArrowRight } from "lucide-react";

import { navigationItems } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";

import logoClaro from "../../assets/devfolio-logo-w.svg";
import logoOscuro from "../../assets/devfolio-logo-b.svg";

// Función que genera las clases de los enlaces según su estado activo.
const navLinkClasses = ({ isActive }) =>
  `focus-ring rounded-lg px-3 py-2 text-sm font-medium ${
    isActive
      ? "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;

function Header() {
  const { theme, toggleTheme } = useTheme();

  // Estado que determina si el tema actual es oscuro.
  const isDark = theme === "dark";

  // Estado que controla la apertura y el cierre del menú de navegación móvil.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Referencia al botón del menú móvil para devolverle el foco cuando se cierra con la tecla Escape.
  const menuButtonRef = useRef(null);

  // Identificador único utilizado para relacionar el botón con el menú de navegación móvil.
  const menuId = useId();
  const location = useLocation();

  // Función que cierra el menú de navegación móvil.
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Efecto que cierra el menú móvil cuando cambia la ruta, los parámetros de búsqueda o el fragmento de la URL.
  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.search, location.hash, closeMenu]);

  // Efecto que permite cerrar el menú móvil con la tecla Escape y devuelve el foco al botón que lo controla.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Efecto que cierra el menú móvil cuando la ventana alcanza el punto de quiebre de escritorio.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleBreakpointChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);
    return () =>
      mediaQuery.removeEventListener("change", handleBreakpointChange);
  }, []);

  return (
    // Contenedor principal de la cabecera con estilos adaptables a los temas claro y oscuro.
    <header className="border-b border-slate-300 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      {/* Contenedor que organiza el logotipo, la navegación y las acciones de la cabecera. */}
      <div className="mx-auto flex min-h-18 w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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
            className="block h-auto w-17 dark:hidden"
          />

          {/* Logo para modo oscuro (oculto por defecto, se muestra en modo oscuro) */}
          <img
            src={logoOscuro}
            alt=""
            className="hidden h-auto w-17 dark:block"
          />
        </Link>

        {/* Menú de navegación principal para dispositivos de escritorio. */}
        <nav className="hidden md:block" aria-label="Navegación principal">
          {/* Lista de enlaces generados dinámicamente a partir de las opciones de navegación. */}
          <ul className="flex flex-row gap-4">
            {navigationItems.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={navLinkClasses}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contenedor de las acciones disponibles en la cabecera, como cambiar el tema, acceder al contacto y abrir el menú móvil. */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Botón que permite alternar entre el tema claro y el tema oscuro. */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {/* Icono que representa la acción disponible según el tema actual. */}
            {isDark ? (
              <Sun aria-hidden="true" size={19} />
            ) : (
              <Moon aria-hidden="true" size={19} />
            )}
          </button>

          {/* Enlace de llamada a la acción que dirige al usuario a la página de contacto. */}
          <Link
            to="/contacto"
            className="focus-ring hidden items-center gap-1 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 md:inline-flex"
          >
            Hablemos
            {/* Icono que acompaña al enlace de contacto. */}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>

          {/* Botón que controla la apertura y el cierre del menú de navegación móvil. */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {/* Icono que cambia según el estado del menú móvil para indicar si puede abrirse o cerrarse. */}
            {isMenuOpen ? (
              <X aria-hidden="true" size={21} />
            ) : (
              <Menu aria-hidden="true" size={21} />
            )}
          </button>
        </div>
      </div>

      {/* Menú de navegación para dispositivos móviles, visible únicamente cuando el estado del menú está activo. */}
      {isMenuOpen && (
        <nav
          id={menuId}
          className="border-t border-slate-200 px-4 py-3 sm:px-6 md:hidden dark:border-slate-800"
          aria-label="Navegación principal - Movil"
        >
          {/* Lista de enlaces de navegación móvil generados dinámicamente a partir de las opciones disponibles. */}
          <ul className="flex flex-col items-end gap-4">
            {navigationItems.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={navLinkClasses}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contenedor que alinea a la derecha el enlace de contacto y establece su separación respecto a la navegación. */}
          <div className="mt-5 flex items-center justify-end">
            {/* Enlace de llamada a la acción que dirige al usuario a la página de contacto. */}
            <Link
              to="/contacto"
              className="focus-ring flex items-center justify-center gap-1 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 sm:w-full"
            >
              Hablemos
              {/* Icono que acompaña al enlace de contacto. */}
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
