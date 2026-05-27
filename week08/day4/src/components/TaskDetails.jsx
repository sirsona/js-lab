import { Link, useNavigate, useParams } from "react-router";
import { useTasks } from "../TaskContext";

function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Task not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Task Detail</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          ← Back
        </button>
      </div>

      {/* Task card */}
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Task ID</p>
          <p className="font-medium">{task.id}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Task Text</p>
          <p
            className={`font-medium ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Status</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
