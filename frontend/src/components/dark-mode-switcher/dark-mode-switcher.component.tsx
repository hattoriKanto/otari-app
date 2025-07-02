import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@/components/ui/switch";
import useTheme from "@/hooks/useTheme.hook";

export default function DarkModeSwitcher() {
  const { setTheme, currentClass } = useTheme();
  const isLight = currentClass === "light";

  function handleThemeSwitch() {
    setTheme(isLight ? "dark" : "light");
  }

  return (
    <div className="flex items-center space-x-4">
      <FontAwesomeIcon
        icon={faMoon}
        className="cursor-pointer text-2xl"
        onClick={() => setTheme("dark")}
      />
      <Switch
        className="cursor-pointer"
        checked={isLight}
        onCheckedChange={handleThemeSwitch}
        role="switch"
        aria-label="Toggle light/dark mode"
      />
      <FontAwesomeIcon
        icon={faSun}
        className="cursor-pointer text-2xl"
        onClick={() => setTheme("light")}
      />
    </div>
  );
}
