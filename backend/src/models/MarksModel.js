import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },
    type: {
      type: String,
      enum: ["UT-1", "UT-2", "Assignment", "Practical", "Theory"],
      required: true,
    },
    marksObtained: {
      type: Number,
      required: true,
      min: 0,
    },
    totalMarks: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const Marks = mongoose.model("Marks", marksSchema);
export default Marks;
