import Head from 'next/head'
import Date from '../Date/Date'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import NavLink from '../NavLink/NavLink'
import Socials from '../Socials/Socials'
import styles from './layout.module.css'


export default function Layout ({children}:{children:JSX.Element}) {
  return (
    <div>
      <Head>
        <title>Tracing Code</title>
        <meta name="description" content="Code things I learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.nav}>
      <Navbar/>
      </section>
      <main className={styles.container}> 
      <section className={styles.children}>
      <div className={styles.upperSection}>
        <Socials></Socials>
      </div>  
      {children}
      </section>
        
      </main>
    </div>
  )
}
