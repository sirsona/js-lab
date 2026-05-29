import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import TemperatureDisplay from "./TemperatureDisplay";

function TemperaturePage() {
  const [celsius, setCelsius] = useState(20);
  return (
    <div>
      <TemperatureInput celsius={celsius} onChange={setCelsius} />
      <TemperatureDisplay celsius={celsius} />
    </div>
  );
}

export default TemperaturePage;
