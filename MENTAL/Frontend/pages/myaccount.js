import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import UserNav from '../component/usernav';
import styles from '../styles/MyAccount.module.css'; // Make sure to import your CSS module or stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';

const MyAccount = () => {
  const router = useRouter();
  const userEmail = router.query.email;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/myaccount/${userEmail}`);

        if (response.data.success) {
          setUserData(response.data.data);
        } else {
          console.log('Failed to fetch user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error during user data fetch:', error.message);
      }
    };

    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]);

  return (
    <>
      <UserNav />
      <div className={styles.heading}>
        <h1>Welcome to My Account</h1>
        <div className={`container ${styles.content}`}>
  {userData ? (
    <>
      <div className={`row  ${styles.rows}`} >
        <div className="col-md-5">
          <p className="fw-bold">User ID</p>
        </div>
        <div className="col-md-7">

          <p>{userData.id}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User Name</p>
        </div>
        <div className="col-md-7">
          <p>{userData.name}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User Email</p>
        </div>
        <div className="col-md-7">
          <p>{userData.email}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User Phone</p>
        </div>
        <div className="col-md-7">
          <p>{userData.phone}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User State</p>
        </div>
        <div className="col-md-7">
          <p>{userData.state}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User City</p>
        </div>
        <div className="col-md-7">
          <p>{userData.city}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User Pincode</p>
        </div>
        <div className="col-md-7">
          <p>{userData.pincode}</p>
        </div>
      </div>

      <div className={`row  ${styles.rows}`}>
        <div className="col-md-5">
          <p className="fw-bold">User Age:</p>
        </div>
        <div className="col-md-7">
          <p>{userData.age}</p>
        </div>
      </div>
    </>
  ) : (
    <p>Loading user data...</p>
  )}
</div>
      </div>
    </>
  );
};

export default MyAccount;
