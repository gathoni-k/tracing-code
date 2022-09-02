import type { NextPage } from 'next'
import Head from 'next/head'
import Date from '../components/Date/Date'
import Socials from '../components/Socials/Socials'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tracing Code</title>
        <meta name="description" content="Code things I learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.upperSection}>
        <Date></Date>
        <Socials></Socials>
        </div>
      </main>
    </div>
  )
}

export default Home
