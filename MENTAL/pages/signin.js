// pages/signup.js
import React, { useState } from 'react';
import styles from '../styles/sign.module.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    // Simulated backend API call for user registration
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    // Check the response from the backend
    if (response.ok) {
      // Successful signup, you can redirect to another page or perform additional actions
      console.log('Signup successful', data);
    } else {
      // Failed signup
      console.log('Signup failed', data);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form className={styles['signup-form']}>
        <label className={styles['signup-label']}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles['signup-input']}
          />
        </label>
        <label className={styles['signup-label']}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles['signup-input']}
          />
        </label>
        <label className={styles['signup-label']}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles['signup-input']}
          />
        </label>
        <button type="button" onClick={handleSignup} className={styles['signup-button']}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
