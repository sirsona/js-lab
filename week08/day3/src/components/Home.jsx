import { Link } from "react-router";
import { useTasks } from "../TaskContext";
import { TaskManager } from "./TaskManger";

function Home() {
  // const navigate = useNavigate();
  const { tasks } = useTasks();

  return (
    <div>
      <h1>Home</h1>

      {/* <button onClick={() => navigate("/tasks/1")}>Go to task 1</button> */}
      <TaskManager />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
