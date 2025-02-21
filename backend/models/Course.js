const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  lectures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lecture" }],
});

module.exports = mongoose.model("Course", CourseSchema);
