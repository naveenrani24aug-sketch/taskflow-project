import { useNavigate } from "react-router-dom";
import type { Task } from "../types/task";
import { createTask, updateTask } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import { useState } from "react";

type CreateTaskPageProps = {
  editingTask: Task | null;
  setEditingTask: (task: Task | null) => void;
};

function CreateTaskPage({ editingTask, setEditingTask }: CreateTaskPageProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleCreateTask = async (taskData: Omit<Task, "_id" | "createdAt">) => {
    try {
      setIsSubmitting(true);
      setError("");

      if (editingTask) {
        await updateTask(editingTask._id, taskData);
        setEditingTask(null);
      } else {
        await createTask(taskData);
      }

      navigate("/");
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Failed to save task. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="main">
      {error && <p className="error" style={{ textAlign: "center" }}>{error}</p>}
      <TaskForm
        onCreateTask={handleCreateTask}
        editingTask={editingTask}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}

export default CreateTaskPage;