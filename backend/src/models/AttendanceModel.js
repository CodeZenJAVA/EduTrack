import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // student ka ref
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    }, // kis subject ka attendance
    totalLectures: { type: Number, default: 0 }, // total lectures conducted
    attendedLectures: { type: Number, default: 0 }, // student ne kitne attend kiye
  },
  { timestamps: true }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
