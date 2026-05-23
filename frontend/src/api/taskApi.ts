import axios from "axios";
import type { Task } from "../types/task";

const API_URL = "http://localhost:5000/tasks";

// GET all tasks (with optional search)
export const getTasks = async (search?: string): Promise<Task[]> => {
  const url = search ? `${API_URL}?search=${search}` : API_URL;
  const response = await axios.get(url);
  return response.data.data;
};

// POST create new task
export const createTask = async (task: Omit<Task, "_id" | "createdAt">): Promise<Task> => {
  const response = await axios.post(API_URL, task);
  return response.data.data;
};

// DELETE task by ID
export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

// PUT update task by ID (Bonus)
export const updateTask = async (id: string, task: Omit<Task, "_id" | "createdAt">): Promise<Task> => {
  const response = await axios.put(`${API_URL}/${id}`, task);
  return response.data.data;
};