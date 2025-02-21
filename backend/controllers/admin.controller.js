const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ name, email, password: hashedPassword });
    await admin.save();
    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error registering admin" });
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid email or password" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, admin: { id: admin._id, name: admin.name, email: admin.email } });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};
