import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/sign.module.css';
import Nav from '../component/nav';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    phone: '',
    age: '',
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'name' || name === 'state' || name === 'city') {
      // Allow only alphabetic characters and spaces
      updatedValue = value.replace(/[^A-Za-z\s]/gi, '');
    } else if (name === 'phone' || name === 'pincode' || name === 'age') {
      // Allow only numeric characters
      updatedValue = value.replace(/\D/g, '');
    }

    setData({ ...data, [name]: updatedValue });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate each field
    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(data.name.trim())) {
      newErrors.name = 'Name must contain only letters and spaces';
      valid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!data.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data.password.trim())) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
      valid = false;
    }

    if (!data.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (!data.state.trim()) {
      newErrors.state = 'State is required';
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(data.state.trim())) {
      newErrors.state = 'State must contain only letters and spaces';
      valid = false;
    }

    if (!data.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(data.city.trim())) {
      newErrors.city = 'City must contain only letters and spaces';
      valid = false;
    }

    if (!data.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
      valid = false;
    } else if (!/^\d{6}$/.test(data.pincode.trim())) {
      newErrors.pincode = 'Pincode must be a 6-digit number';
      valid = false;
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone is required';
      valid = false;
    } else if (data.phone.trim().length !== 10) {
      newErrors.phone = 'Phone must be a 10-digit number';
      valid = false;
    }

    if (!data.age.trim()) {
      newErrors.age = 'Age is required';
      valid = false;
    } else if (isNaN(data.age) || parseInt(data.age) < 0) {
      newErrors.age = 'Age must be a valid number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8001/create', data);
      console.log(response.data.message);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* navbar */}
      <Nav />
      <div className={styles.container}>
        {/* Content */}
        <div className={styles.content}>
          <h1 className={styles.mkc}>Make Account</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <table className={styles.tb}>
              <tbody>
                <tr>
                  <td className={styles.name}>
                    <label htmlFor='inputName'>Full Name</label>
                  </td>
                  <td className={styles.name}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputName'
                      name='name'
                      placeholder='Enter Name'
                      autoComplete='off'
                      value={data.name}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.name && <div className={styles.error}>{errors.name}</div>}
                  </td>
                  <td className={styles.email}>
                    <label htmlFor='inputEmail'>E-Mail</label>
                  </td>
                  <td className={styles.email}>
                    <input
                      type='email'
                      className='form-control'
                      id='inputEmail'
                      name='email'
                      placeholder='Enter Email'
                      autoComplete='off'
                      value={data.email}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                  </td>
                </tr>
                <tr>
                  <td className={styles.psd}>
                    <label htmlFor='inputPassword'>Password</label>
                  </td>
                  <td className={styles.psd}>
                    <input
                      type='password'
                      className='form-control'
                      id='inputPassword'
                      name='password'
                      placeholder='Enter Password'
                      value={data.password}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                  </td>
                  <td className={styles.address}>
                    <label htmlFor='inputAddress'>Address</label>
                  </td>
                  <td className={styles.address}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputAddress'
                      name='address'
                      placeholder='1234 Main St'
                      autoComplete='off'
                      value={data.address}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.address && <div className={styles.error}>{errors.address}</div>}
                  </td>
                </tr>
                <tr>
                  <td className={styles.state}>
                    <label htmlFor='inputState'>State</label>
                  </td>
                  <td className={styles.state}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputState'
                      name='state'
                      placeholder='Enter State Name'
                      autoComplete='off'
                      value={data.state}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.state && <div className={styles.error}>{errors.state}</div>}
                  </td>
                  <td className={styles.city}>
                    <label htmlFor='inputCity'>City</label>
                  </td>
                  <td className={styles.city}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputCity'
                      name='city'
                      placeholder='Enter City'
                      autoComplete='off'
                      value={data.city}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.city && <div className={styles.error}>{errors.city}</div>}
                  </td>
                </tr>
                <tr>
                  <td className={styles.pincode}>
                    <label htmlFor='inputPincode'>Pincode</label>
                  </td>
                  <td className={styles.pincode}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputPincode'
                      name='pincode'
                      placeholder='Enter Pincode'
                      autoComplete='off'
                      value={data.pincode}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.pincode && <div className={styles.error}>{errors.pincode}</div>}
                  </td>
                  <td className={styles.phn}>
                    <label htmlFor='inputPhone'>Phone</label>
                  </td>
                  <td className={styles.phn}>
                    <input
                      type='text'
                      className='form-control'
                      id='inputPhone'
                      name='phone'
                      placeholder='Enter Phone'
                      autoComplete='off'
                      value={data.phone}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.phone && <div className={styles.error}>{errors.phone}</div>}
                  </td>
                </tr>
                <tr>
                  <td className={styles.phn}>
                    <label htmlFor='inputAge'>Age</label>
                  </td>
                  <td className={styles.phn}>
                    <input
                      type='number'
                      className='form-control'
                      id='inputAge'
                      name='age'
                      placeholder='Enter Age'
                      autoComplete='off'
                      value={data.age}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.age && <div className={styles.error}>{errors.age}</div>}
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              <button type='submit' className={styles.btnprimary}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
