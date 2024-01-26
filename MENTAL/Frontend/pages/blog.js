import React from 'react';
import styles from '../styles/Blog.module.css'; // Import your CSS module
import Nav from '../component/nav'
const Blog = () => {
  return (
    <>
    <Nav/>
    <div className={styles['blog-container']}>
      <header className={styles['blog-header']}>
        <h1>Mental Health Matters</h1>
        <p>Explore articles and resources for mental well-being.</p>
      </header>
      <section className={styles['blog-content']}>
        <article className={styles['article']}>
          <h2>Understanding Anxiety</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            quis justo in urna efficitur varius at vel ex.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>Coping with Stress</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        {/* Add more articles as needed */}
      </section>
      
    </div>
    </>
  );
};

export default Blog;
