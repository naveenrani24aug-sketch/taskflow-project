import { Router } from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", createTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

export default router;