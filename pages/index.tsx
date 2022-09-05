import type { NextPage } from 'next'
import Head from 'next/head'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import Date from '../components/Date/Date'
import Header from '../components/Header/Header'
import Pill from '../components/Pill/Pill'
import Socials from '../components/Socials/Socials'
import { getAllPublished } from '../helpers/md'
import styles from '../styles/Home.module.css'
interface postFrontMatter {
    title: string
    metaTitle: string
    metaDesc: string
    isPublished: boolean
    publishedDate: string
    tags: string[]
  }
interface postProps {
    frontmatter: postFrontMatter
    slug: string
}
interface iPosts {
    posts: postProps[]
}

const Home: NextPage<iPosts> = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Tracing Code</title>
        <meta name="description" content="Code things I learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.upperSection}>
        <Date></Date>
        <Socials></Socials>
        </div>
      <main className={styles.container}>    
        <Header/>
        <div className={styles.categoryWrapper}>
        <Pill text="js" background='#deecf5'/>
        <Pill text="react" background='#DBDBFD'/>
        <Pill text="next" background='#FBE9E7'/>
        <Pill text="css" background='#FCD3E5'/>
        </div>
        <div className={styles.articles}>
        {posts.map((post, index) => (
          <ArticleCard key={index} title={post.frontmatter.title} link={`posts/${post.slug}`} description={post.frontmatter.metaDesc} date={post.frontmatter.publishedDate}/>
        ))}

        </div>
      </main>
    </div>
  )
}
export const getStaticProps = async () => {
  const posts = getAllPublished("posts");
  return {
    props: { posts },
  };
};

export default Home
