export const THEME_STORAGE_KEY = "portfolio-theme";

export function getPreferredTheme() {
  if (typeof window === "undefined") return "dark";

  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore private-mode storage errors */
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  const root = document.documentElement;
  root.setAttribute("data-theme", nextTheme);
  root.style.colorScheme = nextTheme;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
    /* ignore private-mode storage errors */
  }

  return nextTheme;
}
