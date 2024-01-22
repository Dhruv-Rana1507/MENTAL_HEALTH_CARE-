import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import UserNav from '../component/usernav'
const MyAccount = () => {
  const router = useRouter();
  const userEmail = router.query.email;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make a request to the myaccount endpoint on your server to fetch user data
        const response = await axios.get(`http://localhost:8001/api/myaccount/${userEmail}`);
        // const response = await axios.get(`http://localhost:8001/api/myaccount/${encodeURIComponent(userEmail)}`);


        if (response.data.success) {
          // Set the fetched user data to the state
          setUserData(response.data.data);
        } else {
          console.log('Failed to fetch user data:', response.data.message);
        }
      } catch (error) {
        console.error('Error during user data fetch:', error.message);
      }
    };

    // Check if userEmail is available before making the API request
    if (userEmail) {
      fetchUserData();
    }
  }, [userEmail]);

  return (
    <>
     {/* navbar */}
     <UserNav />
    <div>
      <h1>Welcome to My Account</h1>
      {userData ? (
        <>
          <p>User Name: {userData.id}</p>
          <p>User Name: {userData.name}</p>
          <p>User Email: {userData.email}</p>
          <p>User Name: {userData.phone}</p>
          <p>User Name: {userData.state}</p>
          <p>User Name: {userData.city}</p>
          <p>User Name: {userData.pincode}</p>
          <p>User Name: {userData.age}</p>
          {/* Add more fields as needed */}
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </>
  );
};

export default MyAccount;
