import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      default: "student",
    },
    programId: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    subjectsAssigned: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
