export type TaskStatus = "Todo" | "In Progress" | "Done";

export type TaskPriority = "Low" | "Medium" | "High";

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  createdAt: string;
};