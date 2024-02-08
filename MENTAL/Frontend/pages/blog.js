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
          <h2>Anxiety and its Causes, Symptoms & Types</h2>
          <p>
          A nxiety is one of the most prevalent mental illnesses and is observed in many forms and intensities. Understanding its nature, causes and symptoms can help you gain an upper hand in your battle with anxiety.
          <br/>
          <br/>
          <br/>
          <b>What causes Anxiety?</b><br/>The causes of anxiety vary from person to person and may depend on age, occupation, family history and other social and environmental factors. 
          <br/>
          <br/>
          <br/>
          <b>Symptoms of Anxiety</b>
          <br/>
          <ul>
            <li >Restlessness, and feeling “on-the-edge”</li>
            <li>Uncontrollable feelings of worry</li>
            <li>Increased irritability</li>
            <li>Difficulties in concentrating</li>
            <li>Difficulty falling or staying asleep</li>
            
          </ul>
          </p>
        </article>
        <article className={styles['article']}>
          <h2>The Loneliness Ordeal</h2>
          <p>
            <strong>
          What is Emotional Loneliness?</strong>
          <br/>
          A commonly heard, yet complex term, Loneliness is defined as a perception of emotional/social isolation that one experiences, and it mainly occurs when one feels emotionally disconnected or detached. Loneliness is a state of mind; a state where one could even be in the midst of a lively group, and still, experience the looming grey cloud of loneliness above their head. When it comes to emotional loneliness, however, it would be surprised how common it can be; there are a number of us who would much rather keep our problems to ourselves, for fear of being misunderstood or ridiculed. It can come from a lack of emotional relationships between family members, friends, partners, coworkers etc. This isolates us from those around us and withholds us from engaging in social activities, regardless of whether or not the opportunity to socialise has been given to us. Eventually, it can make one want to physically isolate themselves willingly. Humans who experience loneliness also describe it as a fear of connecting with people because of the judgment and the Anxiety it brings with it. If this is you, I completely understand how you feel. Especially with the Pandemic going on, most of our time is limited to an enclosed space; it might be challenging for one to try and bond with another.
          </p>
        </article>
        <article className={styles['article']}>
          <h2>BREAKING THE STIGMA</h2>
          <p>
            <strong>HOW TO TALK TO YOUR CHILDREN ABOUT MENTAL HEALTH</strong>
            <br/>
            <b>
            CREATE A SAFE PLACE:</b>
            <span>First, create a positive safe place over time. Plan activities that your children enjoy. In a relaxed atmosphere, ask about your child's school, friends, teachers, current events, interest areas how they feel about them.</span>
          </p>
          <p>
            <strong>CONVERSATION STARTERS: </strong>
            <br/>
            <ul>
              <li>What makes you happy/sad/angry/frustrated/worried/scared?</li>
              <li>And what do you do to make yourself feel better?</li>
              <li>And what do you do to make yourself feel better? </li>
              <li>Tell me about your favourite book/show/movie and why do you like it.</li>
              <li>If you were the boss of your house, what rules you would make?</li>
              <li>Name 3 things you were grateful for.</li>
            
            </ul>
          </p>
        </article>
       
      </section>
      
    </div>
    </>
  );
};

export default Blog;
