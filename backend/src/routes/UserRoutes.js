import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/UserController.js";
import { protect, authorizeRoles } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

// Public routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// Private route (any logged-in user can access)
userRouter.get("/profile", protect, getUserProfile);

// Example of role-based route
userRouter.get("/admin-only", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin, you have special access 🚀" });
});

userRouter.get(
  "/faculty-only",
  protect,
  authorizeRoles("faculty"),
  (req, res) => {
    res.json({ message: "Welcome Faculty 👨‍🏫" });
  }
);

export default userRouter;
