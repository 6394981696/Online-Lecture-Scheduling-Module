const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/admin", require("./routes/admin.routes"));
app.use("/api/instructor", require("./routes/instructor.routes"));
app.use("/api/course", require("./routes/course.routes"));
app.use("/api/lecture", require("./routes/lecture.routes"));

app.get("/", (req, res) => {
  res.send("Welcome to Online Lecture Scheduling API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
