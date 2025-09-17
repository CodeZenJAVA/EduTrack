import Program from "../models/ProgramModel.js";

// @desc   Create a new program
// @route  POST /api/programs
// @access Admin
export const createProgram = async (req, res) => {
  try {
    const { name, description } = req.body;

    const program = new Program({ name, description });
    const savedProgram = await program.save();

    res.status(201).json(savedProgram);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create program", error: error.message });
  }
};

// @desc   Get all programs
// @route  GET /api/programs
// @access Public
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch programs", error: error.message });
  }
};

// @desc   Get single program by ID
// @route  GET /api/programs/:id
// @access Public
export const getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.json(program);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch program", error: error.message });
  }
};

// @desc   Update a program
// @route  PUT /api/programs/:id
// @access Admin
export const updateProgram = async (req, res) => {
  try {
    const { name, description } = req.body;
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    program.name = name || program.name;
    program.description = description || program.description;

    const updatedProgram = await program.save();
    res.json(updatedProgram);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update program", error: error.message });
  }
};

// @desc   Delete a program
// @route  DELETE /api/programs/:id
// @access Admin
export const deleteProgram = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }

    await program.deleteOne();
    res.json({ message: "Program removed" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete program", error: error.message });
  }
};
