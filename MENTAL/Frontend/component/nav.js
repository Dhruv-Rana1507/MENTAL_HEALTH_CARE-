import React from 'react'
import Link from 'next/link'
import styles from '@/styles/nav.module.css'
const Nav = () => {
  return (
    <div className={styles.akhuheader}>
<div className={styles.logo}>
<strong><Link href='/'>Inner Ease</Link></strong>  
</div>        
    <nav className={styles.mainnav}>
    <ul>
      <Link href='/'><li>Home</li></Link>
      <Link href='/blog'><li>Blog</li></Link>
      <Link href='/analysis'><li>Analysis</li></Link>
      <Link href='/login'><li>Log In</li></Link>
      <Link href='/sign'><li>Sign In</li></Link>
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