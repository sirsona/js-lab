import { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureInput from "./TemperatureInput";

function TemperaturePage() {
  const [celsius, setCelsius] = useState(20);
  return (
    <div>
      <TemperatureDisplay celsius={celsius} />
      <TemperatureInput celsius={celsius} onChange={setCelsius} />
    </div>
  );
}

export default TemperaturePage;
