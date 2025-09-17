import Subject from "../models/SubjectModel.js";
import Semester from "../models/SemesterModel.js";
import User from "../models/UserModel.js"; // optional (if you want to validate faculty)

// Create subject
// POST /api/subjects
// protected (admin)
export const createSubject = async (req, res) => {
  try {
    const { name, code, faculty, semester } = req.body;

    // optional: validate faculty exists and has role faculty
    if (faculty) {
      const fac = await User.findById(faculty);
      if (!fac) return res.status(400).json({ message: "Faculty not found" });
      // optionally: if (fac.role !== "faculty") ...
    }

    const subject = new Subject({ name, code, faculty, semester });
    const saved = await subject.save();

    // if semester provided, push subject into semester.subjects
    if (semester) {
      const sem = await Semester.findById(semester);
      if (sem) {
        sem.subjects = sem.subjects || [];
        sem.subjects.push(saved._id);
        await sem.save();
      }
    }

    res.status(201).json(saved);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create subject", error: err.message });
  }
};

// Get all subjects (optionally filter by semester or faculty)
// GET /api/subjects?semester=<id>&faculty=<id>
export const getAllSubjects = async (req, res) => {
  try {
    const filter = {};
    if (req.query.semester) filter.semester = req.query.semester;
    if (req.query.faculty) filter.faculty = req.query.faculty;

    const subjects = await Subject.find(filter)
      .populate("faculty", "name email")
      .populate("semester", "yearNumber semesterNumber");

    res.json(subjects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch subjects", error: err.message });
  }
};

// Get subjects by semester id (explicit)
// GET /api/subjects/semester/:semesterId
export const getSubjectsBySemester = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const subjects = await Subject.find({ semester: semesterId })
      .populate("faculty", "name email")
      .populate("semester", "yearNumber semesterNumber");
    res.json(subjects);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to fetch subjects for semester",
        error: err.message,
      });
  }
};

// Get single subject by id
// GET /api/subjects/:id
export const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
      .populate("faculty", "name email")
      .populate("semester", "yearNumber semesterNumber");
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.json(subject);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch subject", error: err.message });
  }
};

// Update subject
// PUT /api/subjects/:id
// protected (admin)
export const updateSubject = async (req, res) => {
  try {
    const { name, code, faculty, semester } = req.body;
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    // if semester changed, remove from old semester and add to new one
    if (semester && semester.toString() !== String(subject.semester)) {
      // remove from old semester
      if (subject.semester) {
        const oldSem = await Semester.findById(subject.semester);
        if (oldSem) {
          oldSem.subjects = (oldSem.subjects || []).filter(
            (sId) => sId.toString() !== subject._id.toString()
          );
          await oldSem.save();
        }
      }
      // add to new semester
      const newSem = await Semester.findById(semester);
      if (newSem) {
        newSem.subjects = newSem.subjects || [];
        newSem.subjects.push(subject._id);
        await newSem.save();
      }
      subject.semester = semester;
    }

    subject.name = name || subject.name;
    subject.code = code || subject.code;
    subject.faculty = faculty || subject.faculty;

    const updated = await subject.save();
    res.json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update subject", error: err.message });
  }
};

// Delete subject
// DELETE /api/subjects/:id
// protected (admin)
export const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    // remove reference from semester
    if (subject.semester) {
      const sem = await Semester.findById(subject.semester);
      if (sem) {
        sem.subjects = (sem.subjects || []).filter(
          (sId) => sId.toString() !== subject._id.toString()
        );
        await sem.save();
      }
    }

    await subject.deleteOne();
    res.json({ message: "Subject removed" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete subject", error: err.message });
  }
};
