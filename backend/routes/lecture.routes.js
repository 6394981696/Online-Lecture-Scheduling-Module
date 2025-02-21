const express = require("express");
const router = express.Router();

// Dummy route
router.get("/", (req, res) => {
  res.send("Lecture routes working!");
});

module.exports = router;
