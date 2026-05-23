import type { Task } from "../types/task";

type TaskCardProps = {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

function TaskCard({ task, onDelete, onEdit }: TaskCardProps) {
  return (
    <div className="task">
      <div>
        <strong>{task.title}</strong>
        <p className="meta">{task.status} • Priority: {task.priority}</p>
        <p className="meta">{task.description}</p>
        <p className="meta">
          Created: {task.createdAt}
          {task.dueDate ? ` • Due: ${task.dueDate}` : ""}
        </p>
      </div>
      <div className="task-buttons">
        <button className="btn edit" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="btn delete" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;