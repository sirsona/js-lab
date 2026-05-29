import { useState } from "react";
import "./App.css";
import DarkModeSwitch from "./components/DarkModelSwitch";
import Modal from "./components/Modal";
import { TaskManager } from "./components/TaskManger";
import UserList from "./components/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Modal />
      <DarkModeSwitch />
      <TaskManager />
      <UserList />
    </>
  );
}

export default App;
