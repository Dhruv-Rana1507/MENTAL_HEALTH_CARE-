// pages/admin.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Usernav from '../component/usernav';
import axios from 'axios';
import styles from '../styles/admin.module.css';

const Admin = () => {
  const router = useRouter();

  const [doctorList, setDoctorList] = useState([]);
  const [adminInfo, setAdminInfo] = useState({
    name: 'Rana Dhruv',
    email: 'admin@gmail.com',
    role: 'Administrator',
  });

  useEffect(() => {
    // Fetch doctor information when the component mounts
    fetchDoctorInformation();
  }, []);

  const fetchDoctorInformation = async () => {
    try {
      // Fetch doctor information from the server
      const response = await axios.get('http://localhost:8001/api/get_doctors');

      if (response.data.success) {
        // Set the fetched doctor information in the state
        setDoctorList(response.data.doctors);
      } else {
        console.log('Failed to fetch doctor information:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching doctor information:', error.message);
    }
  };

  const handleAddDoctorClick = () => {
    // Navigate to the 'add_doctor' route when the "Add Doctor" button is clicked
    router.push('/add_doctor');
  };

  return (
    <>
      {/* navbar */}
      <Usernav />
      <div className={styles.ad}>
        <h2 className={styles.admin}>Admin Panel</h2>
        <div className={styles.adinfo}>
          <p><strong>Name:</strong> {adminInfo.name}</p>
          <p><strong>Email:</strong> {adminInfo.email}</p>
          <p><strong>Role:</strong> {adminInfo.role}</p>
        </div>
        <button onClick={handleAddDoctorClick} className={styles.qt}>
          Add Doctor
        </button>
        
        {/* <button onClick={fetchDoctorInformation} className={styles.info}>
          Fetch Doctor Information
        </button> */}

        {/* Display the fetched doctor information */}
        <div className={styles.doctor_info}>
          <h3>Doctor Information</h3>
          <table  className={styles.tb}>
            <thead className={styles.thead}>
              <tr>
                <th>Name</th>
                <th>Speciality</th>
                <th>State</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody className={styles.body}>
              {doctorList.map((doctor) => (
                <tr key={doctor.iddoctor}>
                  <td>{doctor.dname}</td>
                  <td>{doctor.speciality}</td>
                  <td>{doctor.state}</td>
                  <td>{doctor.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
