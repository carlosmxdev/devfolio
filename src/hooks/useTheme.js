import { useCallback, useEffect, useState } from "react";

// Esta lógica es un reflejo del script inline de index.html. Si cambia esta
// función, debe cambiarse también ese script: misma clave "theme", mismos
// valores válidos ("dark" | "light") y mismo fallback a prefers-color-scheme.
function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  try {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  } catch {
    // La preferencia del sistema es un fallback si localStorage no está disponible.
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // El tema funciona durante la sesión aunque no se pueda guardar.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
