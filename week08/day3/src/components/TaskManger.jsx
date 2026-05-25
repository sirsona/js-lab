import { useEffect, useState } from "react";
import { useTasks } from "../TaskContext";

export function TaskManager() {
  const { tasks, setTasks } = useTasks();
  // const [tasks, setTasks] = useState(() => {
  //   const saved = localStorage.getItem("tasks");
  //   return saved ? JSON.parse(saved) : [];
  // });

  const [input, setInput] = useState("");

  function addTask() {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);

    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      {tasks.length === 0 ? (
        <p>No tasks yet -- add you first one above</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                onClick={() => toggleTask(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <p>{tasks.filter((t) => !t.completed).length} task(s) remaining</p>
    </>
  );
}
