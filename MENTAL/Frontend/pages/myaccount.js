import React from 'react'


import Cookies from 'js-cookie';
import Image from 'next/image'

import { jwtDecode } from 'jwt-decode';
// import styles from "./supplerprofile.module.css"





function My_account() {
    
        function sum() {
          const email = Cookies.get('token');
          alert(email)

        }
  return (
    <div onClick={sum}>My_account</div>
  )
}

export default My_account;