// pages/login.js
import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simulated backend API call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // Check if the provided username and password match any user in the simulated backend
    const user = data.find((user) => user.username === username && user.email === password);

    if (user) {
      // Successful login, you can redirect to another page or perform additional actions
      console.log('Login successful');
    } else {
      // Failed login
      console.log('Login failed');
      alert('Login Fali')
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
