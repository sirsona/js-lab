import { useTheme } from "./ThemeContext.jsx";

function TemperatureDisplay({ celsius }) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h2>Theme is: {theme}</h2>
      <p>Celsius: {celsius.toFixed(1)}</p>
      <p>Fahrenheit: {fahrenheit.toFixed(1)}</p>
    </div>
  );
}

export default TemperatureDisplay;
