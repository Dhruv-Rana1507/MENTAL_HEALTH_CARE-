const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Urvirana@1507',
  database: 'mental',
  port: 3306,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Define a simple route
app.post('/create', (req, res) => {
  const {name, email, password, address, state, city, pincode, phone ,age} = req.body;

  const query ='INSERT INTO sign_in (name, email, password, address, state, city, pincode, phone,age) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)';
  const values = [name, email, password, address, state, city, pincode, phone,age];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating employee' });
    }

    return res.status(201).json({ message: 'Employee created successfully' });
  });
});



// login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request:', email, password);
  // Assuming you have a 'users' table
  const query = 'SELECT * FROM sign_in WHERE email = ? AND password = ?';
  const values = [email, password];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error during login' });
    }

    if (results.length > 0) {
      
      return res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      // No matching user found, send failure response
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  });
});


// myaccount endpoint
app.get('/api/myaccount/:email', (req, res) => {
  const userEmail = req.params.email;
  const query = 'SELECT * FROM sign_in WHERE email = ?';
  const values = [userEmail];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Error fetching user data' });
    }

    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({ success: true, data: user });
    } else {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
  });
});


// check the dieses
app.post('/chk', (req, res) => {
  const { name, age, gender, symptoms, description } = req.body;

  const query =
    'INSERT INTO chek (username, age, gender, symptoms, description) VALUES (?, ?, ?, ?, ?)';
  const values = [name, age, gender, JSON.stringify(symptoms), description];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error storing check yourself data' });
    }

    return res.status(201).json({ message: 'Data stored successfully' });
  });
});







// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
