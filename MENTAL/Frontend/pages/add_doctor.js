import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Usernav from '../component/usernav';
import axios from 'axios';
import styles from '../styles/adddoc.module.css';

const AddDoctor = () => {
  const router = useRouter();

  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    speciality: '',
    state: '',
    city: '',
    email: '',
    phone: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    speciality: '',
    state: '',
    city: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'name') {
      // Allow only alphabetic characters and spaces
      updatedValue = value.replace(/[^A-Za-z\s]/gi, '');
    } else if (name === 'phone') {
      // Allow only numeric characters and limit to 10 digits
      updatedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setDoctorInfo({
      ...doctorInfo,
      [name]: updatedValue,
    });
  };

  const handleAddDoctor = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      const response = await axios.post('http://localhost:8001/api/add_doctor', doctorInfo);
      if (response.data.success) {
        console.log('Doctor added successfully with iddoctor:', response.data.iddoctor);
        router.push('/admin');
      } else {
        console.log('Failed to add doctor:', response.data.message);
      }
    } catch (error) {
      console.error('Error during doctor addition:', error.message);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate each input field
    if (!doctorInfo.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!doctorInfo.speciality.trim()) {
      errors.speciality = 'Speciality is required';
      isValid = false;
    }

    if (!doctorInfo.state.trim()) {
      errors.state = 'State is required';
      isValid = false;
    }

    if (!doctorInfo.city.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }

    if (!doctorInfo.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(doctorInfo.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!doctorInfo.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (doctorInfo.phone.trim().length !== 10) {
      errors.phone = 'Phone number must be 10 digits';
      isValid = false;
    }

    // Update validation errors state
    setValidationErrors(errors);

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Usernav />
      <div className={styles.adddoctorpage}>
        <h2>Add Doctor</h2>
        <form className={styles.frm}>
          <label>
            Name
            <input type="text" name="name" value={doctorInfo.name} onChange={handleInputChange} />
            {validationErrors.name && <span className={styles.error}>{validationErrors.name}</span>}
          </label>
          <label>
            Speciality
            <input type="text" name="speciality" value={doctorInfo.speciality} onChange={handleInputChange} />
            {validationErrors.speciality && <span className={styles.error}>{validationErrors.speciality}</span>}
          </label>
          <label>
            State
            <input type="text" name="state" value={doctorInfo.state} onChange={handleInputChange} />
            {validationErrors.state && <span className={styles.error}>{validationErrors.state}</span>}
          </label>
          <label>
            City
            <input type="text" name="city" value={doctorInfo.city} onChange={handleInputChange} />
            {validationErrors.city && <span className={styles.error}>{validationErrors.city}</span>}
          </label>
          <label>
            Email
            <input type="email" name="email" value={doctorInfo.email} onChange={handleInputChange} />
            {validationErrors.email && <span className={styles.error}>{validationErrors.email}</span>}
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={doctorInfo.phone} onChange={handleInputChange} />
            {validationErrors.phone && <span className={styles.error}>{validationErrors.phone}</span>}
          </label>
          <button type="button" className={styles.bt} onClick={handleAddDoctor}>
            Add Doctor
          </button>
        </form>
      </div>
    </>
  );
};

export default AddDoctor;
