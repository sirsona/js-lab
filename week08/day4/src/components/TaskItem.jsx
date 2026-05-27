//TaskItem.jsx
import React from "react";
import { Link } from "react-router";

export const TaskItem = React.memo(({ task, toggleTask, deleteTask }) => {
  return (
    <li className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-xl mb-2 hover:shadow-md hover:border-gray-300 transition-all">
      <button
        onClick={() => toggleTask(task.id)}
        className={`flex-1 text-left truncate transition-all duration-200 ${task.completed ? "line-through text-gray-400 opacity-70" : "text-gray-800"}`}
      >
        {task.text}
      </button>
      <div className="flex items-center gap-2 ml-4">
        <Link
          to={`/tasks/${task.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          view
        </Link>
        <button
          className="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors font-medium"
          onClick={() => deleteTask(task.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
});
