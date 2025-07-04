import { useContext } from "react";
import { ThemeProviderContext } from "@/context/theme-provider.context";

export default function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
