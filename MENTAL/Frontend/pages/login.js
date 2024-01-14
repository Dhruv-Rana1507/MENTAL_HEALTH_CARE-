// pages/signup.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/sign.module.css';
import { useRouter } from 'next/router'; // Correct import statement for 'next/router'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      // Check if the entered credentials are for the admin
      if (email === 'admin@gmail.com' && password === 'admin') {
        // Redirect to the admin page
        router.push('/admin'); // Replace '/admin' with the actual route for the admin page
      } else {
        // Send a backend API request using Axios for non-admin users
        const response = await axios.post('http://localhost:8001/api/login', {
          email,
          password,
        });

        // Check the response from the backend for non-admin users
        if (response.data.success) {
          // Successful login for non-admin users
          console.log('Login successful', response.data);

          // Redirect to the user's account page for non-admin users
          router.push('/myaccount');
        } else {
          // Failed login for non-admin users
          console.log('Login failed', response.data);
        }
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.hd}>Sign Up</h1>
      <form className={styles['signup-form']}>
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

export default Login;
