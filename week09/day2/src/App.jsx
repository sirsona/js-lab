import { useState } from "react";
import "./App.css";
import TemperaturePage from "./components/TemperaturePage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ThemeToggle />
      <TemperaturePage />
    </div>
  );
}

export default App;
