import { createContext, useEffect, useState } from "react";
import type {
  Theme,
  ThemeProviderProps,
  ThemeProviderState,
} from "./theme-provider.types";

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  currentClass: "light",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [currentClass, setCurrentClass] =
    useState<Omit<Theme, "system">>("light");

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      setCurrentClass(systemTheme);
      return;
    }

    root.classList.add(theme);
    setCurrentClass(theme);
  }, [theme]);

  const value = {
    theme,
    currentClass,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
