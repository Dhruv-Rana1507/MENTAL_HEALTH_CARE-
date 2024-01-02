const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// MySQL database connection configuration
const db = mysql.createConnection("mysql://root:Urvirana@1507@localhost:3306/mental")

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define a simple route
app.post('/login', (req, res) => {
    const { username, password, email, phone_no, DOB, address, gender } = req.body;
  
    // Insert user data into the sign_in table
    const sql = `INSERT INTO sign_in (username, password, email, phone_no, DOB, address, gender) 
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
    db.query(sql, [username, password, email, phone_no, DOB, address, gender], (err, result) => {
      if (err) {
        console.error('Error inserting user data:', err);
        res.json({ success: false });
      } else {
        console.log('User data inserted successfully');
        res.json({ success: true });
      }
    });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
