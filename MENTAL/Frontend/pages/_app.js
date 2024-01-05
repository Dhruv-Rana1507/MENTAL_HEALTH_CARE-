import '@/styles/globals.css'

import Nav from '../component/nav'
import Footer from '../component/footer'
export default function App({ Component, pageProps }) {
  
  return <>

  <Nav/> 
  <Component {...pageProps} />
  <Footer/>
  
  </>
}
