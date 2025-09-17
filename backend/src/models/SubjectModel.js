import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // e.g. Physics, DBMS
    code: { type: String, required: true, unique: true }, // e.g. PHY101, DBMS202
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // assigned faculty
    semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester" }, // belongs to which semester
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;
