import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    yearNumber: { type: Number, required: true }, // 1, 2, 3, 4
    semesterNumber: { type: Number, required: true }, // 1 or 2 in each year
    subjects: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Subject" }, // subjects in this semester
    ],
  },
  { timestamps: true }
);

const Semester = mongoose.model("Semester", semesterSchema);

export default Semester;
