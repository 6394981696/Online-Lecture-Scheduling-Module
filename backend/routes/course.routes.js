const express = require("express");
const router = express.Router();

// Dummy route
router.get("/", (req, res) => {
  res.send("Course routes working!");
});

module.exports = router;
