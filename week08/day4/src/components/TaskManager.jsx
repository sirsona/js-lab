// TaskManger.jsx
import { useEffect, useState } from "react";
import { useTasks } from "../TaskContext";
import { TaskItem } from "./TaskItem";

export function TaskManager() {
  const { tasks, setTasks } = useTasks();
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
    <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto mt-10 p-4 sm:p-6 md:p-8 lg:p-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Manager</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask();
        }}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="Add a task..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
        >
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          No tasks yet -- add your first one above
        </p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
      <p className="mt-6 text-sm text-gray-500 border-t pt-4">
        <span className="font-medium text-gray-700">
          {tasks.filter((t) => !t.completed).length}
        </span>{" "}
        task(s) remaining
      </p>
    </div>
  );
}
