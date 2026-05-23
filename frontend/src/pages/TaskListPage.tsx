import { useState, useEffect } from "react";
import type { Task } from "../types/task";
import { getTasks, deleteTask } from "../api/taskApi";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";

type TaskListPageProps = {
  editingTask: Task | null;
  setEditingTask: (task: Task | null) => void;
};

function TaskListPage({ setEditingTask }: TaskListPageProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const fetchTasks = async (searchTerm?: string) => {
    try {
      setLoading(true);
      setError("");
      const data = await getTasks(searchTerm);
      setTasks(data || []);
    } catch (err) {
      setError("Failed to fetch tasks. Is the backend running?");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this task?");
    if (!confirmed) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError("Failed to delete task.");
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    navigate("/create");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    fetchTasks(e.target.value);
  };

  return (
    <main className="main">
      <section className="card">
        <h2>Task List</h2>

        {/* SEARCH - Group 2 Feature */}
        <div className="search-bar">
          <input
            type="text"
            className="input"
            placeholder="Search tasks by title or description..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* LOADING STATE */}
        {loading && <p className="loading">Loading tasks...</p>}

        {/* ERROR STATE */}
        {error && <p className="error">{error}</p>}

        {/* EMPTY STATE - Engineering Feature */}
        {!loading && !error && tasks.length === 0 && (
          <div className="empty-state">
            <p>No tasks found. Create your first task!</p>
            <button className="btn" onClick={() => navigate("/create")}>
              Create Task
            </button>
          </div>
        )}

        {/* TASK LIST */}
        {!loading && tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </section>
    </main>
  );
}

export default TaskListPage;