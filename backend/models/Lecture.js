const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
});

module.exports = mongoose.model("Lecture", LectureSchema);
