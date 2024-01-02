// pages/contact.js

import React from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - Your Blog Name</title>
        <meta name="description" content="Get in touch with us. We'd love to hear from you!" />
      </Head>

      <div className="container">
        <h1>Contact Us</h1>
        <p>
          We value your feedback and are always eager to hear from our readers. Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us using the form below.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          color: #333;
        }

        p {
          line-height: 1.6;
        }

        form {
          margin-top: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #333;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          input,
          textarea,
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
