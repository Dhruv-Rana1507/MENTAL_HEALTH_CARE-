// pages/login.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [dob, setDOB] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8001/login', {
        username: username,
        password: password,
        email: email,
        phone_no: phoneNo,
        DOB: dob,
        address: address,
        gender: gender,
      });

      if (response.data.success) {
        console.log('Login successful');
      } else {
        console.log('Login failed');
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred during login');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign In</h1>
      <form className={styles.frm}>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>
                <input type="date" value={dob} onChange={(e) => setDOB(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
