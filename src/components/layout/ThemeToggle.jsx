import { useTheme } from "../../context/ThemeContext";
import Icon from "../ui/Icon";

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={!isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className={`theme-toggle-thumb${isDark ? " is-dark" : " is-light"}`}>
          <Icon name={isDark ? "Sun" : "Moon"} />
        </span>
      </span>
      <span className="theme-toggle-label">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
