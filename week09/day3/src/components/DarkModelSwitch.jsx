import { useToggle } from "../hooks/useToggle";

function DarkModeSwitch() {
  const [isDark, toggle] = useToggle(false);

  return <button onClick={toggle}>{isDark ? "Light" : "Dark"} </button>;
}

export default DarkModeSwitch;
