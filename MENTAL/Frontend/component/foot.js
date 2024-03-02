import React from 'react'
import styles from '../styles/foot.module.css'
const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Rana Dhruv. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;