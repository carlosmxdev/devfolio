import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X, ArrowRight } from "lucide-react";

import { navigationItems } from "../../data/navigation";
import { useTheme } from "../../hooks/useTheme";

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
    <header className="border-b border-[#e2e8f0] bg-[#ffffffe6] backdrop-blur-xl dark:border-[#1d293d] dark:bg-[#030712]">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - devfolio */}
        <Link
          to="/"
          aria-label="Devfolio, ir al inicio"
          className="focus-ring rounded-lg text-xl font-black text-[#020617] dark:text-[#ffffff]"
        >
          <span className="text-[#7c3aed] dark:text-[#a78bfa]">&lt;</span>
          devfolio
          <span className="text-[#7c3aed] dark:text-[#a78bfa]"> /&gt;</span>
        </Link>

        {/* Menu de navegacion - Desktop */}
        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex flex-row gap-4">
            {navigationItems.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-[#f5f3ff] text-[#6d28d9] dark:bg-[#a78bfa1a] dark:text-[#c4b5fd]"
                        : "text-[#475569] hover:bg-[#f1f5f9] hover:text-[#020617] dark:text-[#cbd5e1] dark:hover:bg-[#1e293b] dark:hover:text-[#ffffff]"
                    }`
                  }
                >
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
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-[#334155] hover:bg-[#f1f5f9] dark:border-[#334155] dark:bg-[#0f172a] dark:text-[#e2e8f0] dark:hover:bg-[#1e293b]"
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
            className="focus-ring hidden items-center gap-1 rounded-xl bg-[#7c3aed] px-4 py-2.5 text-sm font-semibold text-[#ffffff] hover:bg-[#6d28d9] md:inline-flex"
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
            className="focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-[#ffffff] text-[#334155] hover:bg-[#f1f5f9] md:hidden dark:border-[#334155] dark:bg-[#0f172a] dark:text-[#e2e8f0] dark:hover:bg-[#1e293b]"
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
          hidden={!isMenuOpen}
          className="border-t border-[#e2e8f0] px-4 py-3 sm:px-6 dark:border-[#1d293d]"
          aria-label="Navegación principal"
        >
          <ul className="flex flex-col gap-4">
            {navigationItems.map(({ label, to, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `focus-ring rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive
                        ? "bg-[#f5f3ff] text-[#6d28d9] dark:bg-[#a78bfa1a] dark:text-[#c4b5fd]"
                        : "text-[#475569] hover:bg-[#f1f5f9] hover:text-[#020617] dark:text-[#cbd5e1] dark:hover:bg-[#1e293b] dark:hover:text-[#ffffff]"
                    }`
                  }
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
