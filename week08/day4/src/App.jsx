// App.jsx
import { Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import NotFound from "./components/NotFound";
import TaskDetail from "./components/TaskDetails";
import { TaskManager } from "./components/TaskManager";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-4 border-b border-gray-200 flex gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
