import express from "express";
import {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  getSubjectsBySemester,
} from "../controllers/SubjectController.js";
import { protect } from "../middlewares/authMiddleware.js";

const subjectRouter = express.Router();

// Public
subjectRouter.get("/", getAllSubjects);
subjectRouter.get("/semester/:semesterId", getSubjectsBySemester);
subjectRouter.get("/:id", getSubjectById);

// Protected (create/update/delete)
subjectRouter.post("/", protect, createSubject);
subjectRouter.put("/:id", protect, updateSubject);
subjectRouter.delete("/:id", protect, deleteSubject);

export default subjectRouter;
