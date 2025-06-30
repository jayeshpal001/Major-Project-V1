// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db');

const router = express.Router();

// ===== Mentor Signup =====
router.post('/mentorSignup', async (req, res) => {
  const { first_name, last_name, job_title, company, college, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO mentors (first_name, last_name, job_title, company, college, email, password)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [first_name, last_name, job_title, company, college, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating mentor account" });
      }
      res.status(200).json({ message: "Mentor registered successfully!" });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ===== Login =====
router.post('/login', (req, res) => {
  const { LoginEmail, LoginPassword } = req.body;

  const query = `SELECT * FROM mentors WHERE email = ?`;

  db.query(query, [LoginEmail], async (err, results) => {
    if (err) return res.status(500).json({ message: "DB error" });
    if (results.length === 0) return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(LoginPassword, results[0].password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", mentor: results[0] });
  });
});

module.exports = router;
