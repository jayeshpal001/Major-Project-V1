// index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

 
app.use(cors({
    origin: 'http://localhost:5173', // your Vite frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));
app.use(bodyParser.json());

// ✅ Mentor Registration Route
app.post('/mentorSignup', (req, res) => {
    const { first_name, last_name, job_title, company, college, email, password } = req.body;

    const sql = `
        INSERT INTO mentors 
        (first_name, last_name, job_title, company, college, email, password) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [first_name, last_name, job_title, company, college, email, password], (err, result) => {
        if (err) {
            console.error('Error registering mentor:', err);
            return res.status(500).json({ message: 'Failed to register mentor' });
        }

        res.status(201).json({ message: 'Mentor registered successfully' });
    });
});


app.post('/juniorSignup', (req, res) => {
    const {email, password } = req.body;

    if(!email || !password)
    {
        return res.status(401).json({ message: 'Email and password are required' });
    }

    const sql = 'INSERT INTO learner (email,password) VALUES (?,?)';

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Error registering Junior:', err);
            return res.status(500).json({ message: 'Failed to register Junior' });
        }

         else {
            res.status(201).json({ message: 'Registered Successfully' });
        }
    });
});
 

// ✅ Mentor Login Route
app.post('/login', (req, res) => {
    const { LoginEmail, LoginPassword } = req.body;

    const sql = 'SELECT * FROM mentors WHERE email = ? AND password = ?';

    db.query(sql, [LoginEmail, LoginPassword], (err, result) => {
        if (err) {
            console.error('Login error:', err);
            return res.status(500).json({ message: 'Login failed' });
        }

        if (result.length > 0) {
            res.status(200).json({ message: 'Login successful', user: result[0] });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });

    
});

 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
