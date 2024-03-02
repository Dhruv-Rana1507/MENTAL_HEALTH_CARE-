import React from 'react'
import Link from 'next/link'
import styles from '@/styles/nav.module.css'
const Nav = () => {
  return (
    <div className={styles.akhuheader}>
<div className={styles.logo}>
<Link href='/' className={styles.lg} >Inner<strong>Ease</strong></Link> 
</div>        
    <nav className={styles.mainnav}>
    <ul>
      <Link href='/'><li>Home</li></Link>
      {/* <Link href='/blog'><li>Blog</li></Link> */}
      <Link href='/analysis'><li>Analysis</li></Link>
      <Link href='/login'><li>Log Out</li></Link>
      <Link href='/check'><li>Check YourSelf</li></Link>
      <Link href='/about'><li>About</li></Link>
      <Link href='/contact'><li>Contact</li></Link>
      
    </ul>
  </nav>
  {/* <div className={styles.search}>
        <strong>INNER Ease</strong>
</div>  */}
  </div>
  )
}

export default Nav