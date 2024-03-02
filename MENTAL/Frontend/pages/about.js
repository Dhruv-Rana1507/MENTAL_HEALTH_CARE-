import React from 'react';
import Head from 'next/head';
import Image  from 'next/image';
import Nav from '../component/nav'
import styles from '../styles/abt.module.css'

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Blog Name</title>
        <meta name="description" content="Learn more about us and our blog." />
      </Head>
    <Nav/>

      <div className={styles.container}>
        <h1>About Us</h1>
        <p>
        Welcome to our website! My name is Rana Dhruv and I am a student at MS Ramaiah Institute of Technology. I developed this website to share my passion for technology and design with the world. As a budding tech enthusiast, I believe in the power of innovation and creativity to drive positive change. This platform is a reflection of my dedication to learning and implementing new ideas in the digital space. Feel free to reach out to me at [random email] and [random phone number] to discuss any collaborations or simply to connect. Thank you for visiting and I hope you find inspiration and valuable insights during your time here.
        </p>

        <h2>Our Mission</h2>
        <p>
        Our mission is to provide accessible and comprehensive mental health care for adults, offering support, resources, and guidance for individuals navigating their mental well-being. We are dedicated to creating a safe and inclusive space where adults can find the help they need to thrive emotionally and mentally. Through our platform, we aim to diminish the stigma surrounding mental health while promoting understanding, empathy, and holistic wellness. Our goal is to empower individuals to prioritize their mental health and seek the assistance necessary to lead fulfilling and balanced lives.
        </p>

      
        <div className={styles.teammember}>
        {/* <h2>Meet the Team</h2> */}
          <Image src='/gg.jpg' height='100' width='200'  className={styles.img} />
          <p><strong>Rana Dhruv</strong><br />Founder & Editor-in-Chief</p>
        </div>

      </div>

     
    </div>
  );
};

export default About;
