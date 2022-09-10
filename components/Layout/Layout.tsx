import Head from 'next/head'
import Date from '../Date/Date'
import Header from '../Header/Header'
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
      <main className={styles.container}>  
      <div className={styles.upperSection}>
        <Date></Date>
        <Socials></Socials>
      </div>  
        <Header/>
        <div className={styles.categoryWrapper}>
        <NavLink text="blog" background='#deecf5' link="/" external={false}/>
        <NavLink text="about" background='#DBDBFD' link="/about" external={false}/>
        <NavLink text="reading" background='#FBE9E7' link="/reading-list" external={false}/>
        <NavLink text="projects" background='#FCD3E5' link="/projects" external={false}/>
        </div>
        {children}
      </main>
    </div>
  )
}
