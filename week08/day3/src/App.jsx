import { Link, Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TaskDetail from "./components/TaskDetails";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
