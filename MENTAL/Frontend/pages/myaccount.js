import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import UserNav from '../component/usernav';
import styles from '../styles/MyAccount.module.css'; // Make sure to import your CSS module or stylesheet
// import 'bootstrap/dist/css/bootstrap.min.css';

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
          <table className={`table  ${styles.table}`}>
            <tbody>
              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">ID</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.id}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">Name</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.name}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">Email</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.email}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">Phone</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.phone}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">State</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.state}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">City</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.city}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">Pincode</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.pincode}</p>
                </td>
              </tr>

              <tr>
                <td className={`col-md-5 ${styles.rows}`}>
                  <p className="fw-bold">Age:</p>
                </td>
                <td className="col-md-7">
                  <p>{userData.age}</p>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  </>
);
};

export default MyAccount;