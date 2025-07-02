import type React from "react";

export type Theme = "dark" | "light" | "system";

export type ThemeProviderState = {
  theme: Theme;
  currentClass: Omit<Theme, "system">;
  setTheme: (theme: Theme) => void;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};
