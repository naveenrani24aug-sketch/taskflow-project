import { useState, useEffect } from "react";
import type{ Task, TaskStatus, TaskPriority } from "../types/task";

type TaskFormProps = {
  onCreateTask: (task: Omit<Task, "_id" | "createdAt">) => void;
  editingTask: Task | null;
  isSubmitting: boolean;
};

function TaskForm({ onCreateTask, editingTask, isSubmitting }: TaskFormProps) {
  const [title, setTitle] = useState<string>("");
 const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("Low");
  const [dueDate, setDueDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate ?? "");
    } else {
      setTitle("");
      setDescription("");
      setStatus("Todo");
      setPriority("Low");
      setDueDate("");
    }
  }, [editingTask]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.trim() === "") {
      setError("Task title is required.");
      return;
    }

    if (description.trim() === "") {
      setError("Task description is required.");
      return;
    }

    setError("");

    onCreateTask({ title, description, status, priority, dueDate });

    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Low");
    setDueDate("");
  };

  return (
    <section className="card">
      <h2>{editingTask ? "Update Task" : "Create Task"}</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <textarea
          className="input"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />

        <label>Status</label>
        <select
          className="input"
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as TaskStatus)}
        >
          <option>Todo</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <label>Priority</label>
        <select
          className="input"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as TaskPriority)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Due Date</label>
        <input
          type="date"
          className="input"
          value={dueDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : editingTask ? "Update Task" : "Create Task"}
        </button>
      </form>
    </section>
  );
}

export default TaskForm;