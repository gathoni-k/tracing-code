import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import Socials from '../Socials/Socials'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import styles from './layout.module.css'


export default function Layout ({children}:{children:JSX.Element}) {
  return (
    <div>
      <Head>
        <title>Tracing Code</title>
        <meta name="description" content="Code things I learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
      <Navbar/>
      </nav>
      <main className={styles.container}> 
      <section className={styles.children}>
      <nav className={styles.upperSection}>
        <Socials></Socials>
      </nav>  
      {children}
      </section>
        
      </main>
    </div>
  )
}
