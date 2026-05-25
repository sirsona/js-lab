import { useState } from "react";
import { TaskManager } from "./components/TaskManger";
import Timer from "./components/Timer";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>

      {showTimer && <Timer />}
      <TaskManager />
    </div>
  );
}

export default App;
