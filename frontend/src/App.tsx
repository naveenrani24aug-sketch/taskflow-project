import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Task } from "./types/task";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskListPage from "./pages/TaskListPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSetEditingTask = (task: Task | null) => {
    setEditingTask(task);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <TaskListPage
              editingTask={editingTask}
              setEditingTask={handleSetEditingTask}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateTaskPage
              editingTask={editingTask}
              setEditingTask={handleSetEditingTask}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;