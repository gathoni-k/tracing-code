import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import Date from '../components/Date/Date'
import Header from '../components/Header/Header'
import Pill from '../components/Pill/Pill'
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
        <Header></Header>
        <div className={styles.categoryWrapper}>
        <Pill text="js" background='#deecf5'/>
        <Pill text="react" background='#DBDBFD'/>
        <Pill text="next" background='#FBE9E7'/>
        <Pill text="css" background='#FCD3E5'/>
        </div>
        <div className={styles.articles}>
        <ArticleCard/>
        <ArticleCard/>

        </div>
      </main>
    </div>
  )
}

export default Home
