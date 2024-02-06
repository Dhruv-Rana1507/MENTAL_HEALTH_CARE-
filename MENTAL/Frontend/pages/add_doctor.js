// pages/add_doctor.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Usernav from '../component/usernav';
import axios from 'axios';

const AddDoctor = () => {
  const router = useRouter();

  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    speciality: '',
    state: '',
    city: '',
  });

  const handleInputChange = (e) => {
    setDoctorInfo({
      ...doctorInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddDoctor = async () => {
    try {
      // Send a POST request to your server to insert doctor data into the database
      const response = await axios.post('http://localhost:8001/api/add_doctor', doctorInfo);

      if (response.data.success) {
        console.log('Doctor added successfully with iddoctor:', response.data.iddoctor);
        // Redirect to the admin page after adding the doctor
        router.push('/admin');
      } else {
        console.log('Failed to add doctor:', response.data.message);
      }
    } catch (error) {
      console.error('Error during doctor addition:', error.message);
    }
  };

  return (
    <>
      {/* navbar */}
      <Usernav />
      <div className="add-doctor-page">
        <h2>Add Doctor</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={doctorInfo.name} onChange={handleInputChange} />
          </label>
          <label>
            Speciality:
            <input type="text" name="speciality" value={doctorInfo.speciality} onChange={handleInputChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={doctorInfo.state} onChange={handleInputChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={doctorInfo.city} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleAddDoctor}>
            Add Doctor
          </button>
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
