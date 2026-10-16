import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X, ArrowRight } from "lucide-react";

import { navigationItems } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";

const navLinkClasses = ({ isActive }) =>
  `focus-ring rounded-lg px-3 py-2 text-sm font-medium ${
    isActive
      ? "bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
  }`;

function Header() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuId = useId();
  const location = useLocation();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.search, location.hash, closeMenu]);

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

  // Si se pasa a escritorio con el menu movil abierto, reinicia su estado y se cierra el menu.
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
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - devfolio */}
        <Link
          to="/"
          aria-label="Devfolio, ir al inicio"
          className="focus-ring rounded-lg text-xl font-black text-slate-950 dark:text-white"
        >
          <span className="text-violet-600 dark:text-violet-400">&lt;</span>
          devfolio
          <span className="text-violet-600 dark:text-violet-400"> /&gt;</span>
        </Link>

        {/* Menu de navegacion - Desktop */}
        <nav className="hidden md:block" aria-label="Navegación principal">
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

        {/* Acciones - Desktop */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Boton de tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDark ? (
              <Sun aria-hidden="true" size={19} />
            ) : (
              <Moon aria-hidden="true" size={19} />
            )}
          </button>

          {/* CTA - contacto */}
          <Link
            to="/contacto"
            className="focus-ring hidden items-center gap-1 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 md:inline-flex"
          >
            Hablemos
            <ArrowRight aria-hidden="true" size={15} />
          </Link>

          {/* Boton del menu movil */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={21} />
            ) : (
              <Menu aria-hidden="true" size={21} />
            )}
          </button>
        </div>
      </div>

      {/* Menu de navegacion - Movil */}
      {isMenuOpen && (
        <nav
          id={menuId}
          className="border-t border-slate-200 px-4 py-3 sm:px-6 dark:border-slate-800 md:hidden"
          aria-label="Navegación principal - Movil"
        >
          <ul className="flex flex-col gap-4">
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
        </nav>
      )}
    </header>
  );
}

export default Header;
