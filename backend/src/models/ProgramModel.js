import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    totalYears: { type: Number, default: 4 },
    semesters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Semester" }],
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);

export default Program;
