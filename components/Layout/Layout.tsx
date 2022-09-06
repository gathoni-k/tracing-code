import type { NextPage } from 'next'
import Head from 'next/head'
import Date from '../Date/Date'
import Header from '../Header/Header'
import Pill from '../Pill/Pill'
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
        <Pill text="blog" background='#deecf5' link="/"/>
        <Pill text="about" background='#DBDBFD' link="/about"/>
        <Pill text="resources" background='#FBE9E7' link="/resources"/>
        <Pill text="projects" background='#FCD3E5' link="/projects"/>
        </div>
        {children}
      </main>
    </div>
  )
}
