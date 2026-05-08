import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"} </button>
    </div>
  );
}

export default Toggle;
