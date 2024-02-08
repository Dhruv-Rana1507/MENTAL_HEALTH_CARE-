import React from 'react';
import styles from '../styles/analysis.module.css';
import Nav from '../component/nav';
import Image  from 'next/image';
const Analysis = () => {
  return (
    <>
  
      <Nav />
      <div className={styles['container']}>
        <div className={styles['nv']} id='top'>
          <h2>Mental Health Care Analysis Done In Year Are  </h2>
          <div className={styles['yearmenu']}>
            <ul>
              <li> <a href="#y2014">2014</a> </li>
              <li> <a href="#y2016">2016</a> </li>
              <li> <a href="#y2017">2017</a> </li>
              <li> <a href="#y2018">2018</a> </li>
              <li> <a href="#y2019">2019</a> </li>
            </ul>
          </div>
        </div>
        <div className={styles['ana1']}>
          <p className={styles['dt']}> In 2014, the number of employees who received mental health benefit awareness training was relatively low, with only about 30% of companies offering such training.</p>
          
          <div  className={styles['y2014']}>
            <Image src='/2014.jpg' height='500' width='800' id='y2014'  /> 
            {/* <a href="#top" className={styles['tp']}>Top</a> */}
          </div>
        </div>
        <div className={styles['ana1']}>
          <p className={styles['dt']}>According to a report by the Society for Human Resource Management, the number of employers offering mental health benefits to employees increased significantly in 2016. The report found that approximately 73% of organizations offered some type of mental health benefit that year, up from 57% in 2013. This trend has been driven in part by increased awareness of the importance of mental health and well-being in the workplace, as well as changes in healthcare regulations and technology.</p>
          
          <div  className={styles['y2016']}>
            <Image src='/2016.jpg' height='500' width='800' id='y2016' /> 
          </div>
        </div>
        <div className={styles['ana1']}>
        <p className={styles['dt']}>In 2017, it was reported that approximately 17% of companies in the United States offered mental health benefits to their employees. This includes companies of all sizes and industries. Additionally, some studies have suggested that access to mental health benefits may be associated with improved employee mental health and job performance. It's important for companies to offer these types of benefits as they help to create a supportive and healthy workplace for their employees.</p>
          
          <div  className={styles['y2017']}>
            <Image src='/2017.jpg' height='500' width='800' id='y2017' /> 
          </div>
        </div>

        <div className={styles['ana1']}>
        <p className={styles['dt']}>In 2018, a study found that although 64% of employees were struggling with their mental health, only 19% utilized their company's mental health benefits. This suggests a gap between the availability of mental health resources and their actual utilization. The study's findings can be found in the article "Study Finds Although 64% of Employees Are Struggling with Their Mental Health, Only 19% Used Their Company's Mental Health Benefits Last Year."</p>
          
          <div  className={styles['y2018']}>
            <Image src='/2018.jpg' height='500' width='800' id='y2018' /> 
          </div>
        </div>

        <div className={styles['ana1']}>
        <p className={styles['dt']}>According to a study by the Center for Workplace Mental Health, over 65% of U.S. employers provided mental health benefits in 2019. Additionally, over 25% of employees who used their employer-provided mental health benefits reported that they felt their employer supported their mental health and well-being. </p> 
          
          <div  className={styles['y2019']}>
            <Image src='/2019.jpg' height='500' width='900' id='y2019' /> 
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Analysis;
