import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return <>
      <Header />
      {children}
      <Footer />
  </>
}
export default Layout


// previous layout.js
//import styles from './layout.module.scss'

//export default function Layout({ children }) {
  //return <div className={styles.container}>{children}</div>
//}