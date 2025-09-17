import express from "express";
import {
  createProgram,
  getPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
} from "../controllers/ProgramController.js";
import { protect } from "../middlewares/authMiddleware.js";

const programRouter = express.Router();

// Public routes
programRouter.get("/", getPrograms);
programRouter.get("/:id", getProgramById);

// Protected/Admin routes
programRouter.post("/", protect, createProgram);
programRouter.put("/:id", protect, updateProgram);
programRouter.delete("/:id", protect, deleteProgram);

export default programRouter;
