import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/sign.module.css';

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
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/create', data);
      console.log(response.data.message);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.mkc}>Make Account</h1>
        <form className={styles.form} onSubmit={handleSubmit}>

          <div className={styles.name}>
            <label htmlFor='inputName' >
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              name='name'
              placeholder='Enter Name'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.email}>
            <label htmlFor='inputEmail' >
              E-Mail
            </label>
            <input
              type='email'
              className='form-control'
              id='inputEmail'
              name='email'
              placeholder='Enter Email'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.psd}>
            <label htmlFor='inputPassword' >
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='inputPassword'
              name='password'
              placeholder='Enter Password'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.address}>
            <label htmlFor='inputAddress' >
              Address
            </label>
            <input
              type='text'
              className='form-control'
              id='inputAddress'
              name='address'
              placeholder='1234 Main St'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.state}>
            <label htmlFor='inputState' >
              State
            </label>
            <input
              type='text'
              className='form-control'
              id='inputState'
              name='state'
              placeholder='Enter State Name'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.city}>
            <label htmlFor='inputCity' >
              City
            </label>
            <input
              type='text'
              className='form-control'
              id='inputCity'
              name='city'
              placeholder='Enter City'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.pincode}>
            <label htmlFor='inputPincode' >
              Pincode
            </label>
            <input
              type='text'
              className='form-control'
              id='inputPincode'
              name='pincode'
              placeholder='Enter Pincode'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.phn}>
            <label htmlFor='inputPhone' >
              Phone
            </label>
            <input
              type='text'
              className='form-control'
              id='inputPhone'
              name='phone'
              placeholder='Enter Phone'
              autoComplete='off'
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.crt}>
            <button type='submit' className='btn btn-primary'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
