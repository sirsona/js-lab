import { useParams } from "react-router";
import { useTasks } from "../TaskContext";

function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <div>
      <h1>Task Detail</h1>

      <p>ID: {task.id}</p>
      <p>Text: {task.text}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TaskDetail;
