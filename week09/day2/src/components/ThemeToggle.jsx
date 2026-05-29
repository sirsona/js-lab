import { useTheme } from "./ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
}

export default ThemeToggle;
