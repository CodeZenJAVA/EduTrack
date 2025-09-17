import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/UserController.js";
import { protect } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

// Public routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Private route (requires token)
userRouter.get("/profile", protect, getUserProfile);

export default userRouter;
