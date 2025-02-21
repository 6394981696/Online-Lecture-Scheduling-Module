const express = require("express");
const { registerInstructor, getAllInstructors } = require("../controllers/instructor.controller");

const router = express.Router();

router.post("/register", registerInstructor);
router.get("/", getAllInstructors);

module.exports = router;
