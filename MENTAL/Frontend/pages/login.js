import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import Nav from '../component/nav';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Generate a random numeric captcha (6 digits) on component mount
    setGeneratedCaptcha(generateRandomNumericCaptcha());
  }, []);

  function generateRandomNumericCaptcha() {
    // Generate a random numeric captcha (6 digits)
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(regex)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = () => {
    if (password.length <  8 || password.length > 12) {
      setPasswordError('Password must be between 8 and 12 characters');

      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSignup = async () => {
    try {
      // Validate email and password
      if (!validateEmail() || !validatePassword()) {
        return;
      }

      // Check if the entered captcha is correct
      if (enteredCaptcha !== generatedCaptcha) {
        // Display an alert for incorrect captcha
        alert('Incorrect captcha. Please try again.');
        // Clear the entered captcha field
        setEnteredCaptcha('');
        // Generate a new captcha
        setGeneratedCaptcha(generateRandomNumericCaptcha());
        return;
      }

      // Check if the user is an admin
      if (email === 'admin@gmail.com' && password === 'admin@123') {
        // Redirect to the admin page
        router.push('/admin');
        return;
      }

      // For non-admin users, perform regular authentication (you can query the database here)
      const response = await axios.post('http://localhost:8001/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        // Redirect to the user's account page for non-admin users
        router.push({
          pathname: '/myaccount',
          query: { email }, // Pass the user's email as a query parameter
        });
      } else {
        // Failed login for non-admin users
        console.log('Non-admin login failed', response.data);
      }
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error during login:', error.message);
    }
  };

  return (
    <>
      
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.hd}>Log In</h1>
        <form className={styles['signup-form']}>
          <label className={styles['signup-label']}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={styles['signup-input']}
              required
            />
            {emailError && <span className={styles.error}>{emailError}</span>}
          </label>
          <label className={styles['signup-label']}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              className={styles['signup-input']}
              required
            />
            {passwordError && <span className={styles.error}>{passwordError}</span>}
          </label>
          <label className={styles['signup-label']}>
            Captcha:
            <input
              type="text"
              value={enteredCaptcha}
              onChange={(e) => setEnteredCaptcha(e.target.value)}
              className={styles['signup-input']}
            />
            <span className={styles['captcha-text']}>{generatedCaptcha}</span>
          </label>
          <button
            type="button"
            onClick={handleSignup}
            className={styles['signup-button']}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
