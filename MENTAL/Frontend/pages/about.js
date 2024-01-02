// import React from 'react'

// const about = () => {
//   return (
//     <div>
      

//       <div>
//         This is my about  component
//       </div>
//     </div>
//   )
// }

// export default about



// pages/about.js

import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us - Your Blog Name</title>
        <meta name="description" content="Learn more about us and our blog." />
      </Head>

      <div className="container">
        <h1>About Us</h1>
        <p>
          Welcome to OurBlog, your go-to source for informative and engaging content. We're dedicated to providing you with quality articles, covering a wide range of topics from technology to lifestyle.
        </p>
        <p>
          Founded in 20XX, OurBlog has come a long way from its beginnings. We hope you enjoy our content as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>

        <h2>Our Mission</h2>
        <p>
          At OurBlog, our mission is to deliver valuable, well-researched, and entertaining content to our readers. We strive to be a reliable source of information and a platform that fosters knowledge-sharing and community engagement.
        </p>

        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 1" />
          <p><strong>John Doe</strong><br />Founder & Editor-in-Chief</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 2" />
          <p><strong>Jane Smith</strong><br />Lead Writer</p>
        </div>

        {/* Add more team members as needed */}

      </div>

      <style jsx>{`
        .container {
          max-width: 100%;
          height :100vh;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          color: #333;
        }

        p {
          line-height: 1.6;
        }

        h2 {
          margin-top: 20px;
          color: #333;
        }

        .team-member {
          margin-top: 20px;
          display: flex;
          align-items: center;
        }

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-right: 20px;
        }
      `}</style>
    </div>
  );
};

export default About;
