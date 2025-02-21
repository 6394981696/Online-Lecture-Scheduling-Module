const Instructor = require("../models/Instructor");

const registerInstructor = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const instructor = new Instructor({ name, email, password });
    await instructor.save();
    res.status(201).json({ message: "Instructor registered successfully", instructor });
  } catch (error) {
    res.status(500).json({ error: "Error registering instructor" });
  }
};

const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ error: "Error fetching instructors" });
  }
};

module.exports = { registerInstructor, getAllInstructors };
