import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/sign.module.css';
import Nav from '../component/nav'
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
    age:'',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    // Validate that 'age' is a valid integer before submitting
    const ageValue = parseInt(data.age);
    if (isNaN(ageValue) || ageValue < 0) {
      console.error('Invalid age value');
      // Handle the error or provide feedback to the user
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
    <Nav/>
    <div className={styles.container}>
      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.mkc}>Make Account</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <table className= {styles.tb}>
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
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
                    onChange={handleInputChange}
                    required
                  />
                </td>

               
              </tr>
              <tr>
                  <td className={styles.phn}>
                    <label htmlFor='inputPhone'>Age</label>
                  </td>
                  <td className={styles.phn}>
                    <input
                      type='number'
                      className='form-control'
                      id='inputPhone'
                      name='age'
                      placeholder='Enter Age'
                      autoComplete='off'
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                </tr>
            </tbody>
          </table>

          <div >
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
