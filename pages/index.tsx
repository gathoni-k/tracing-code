import type { NextPage } from 'next'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import { getAllPublished } from '../helpers/notion'
import { postMetaProps } from '../lib/types'
import styles from '../styles/Home.module.css'
interface iPosts {
    posts: postMetaProps[]
}

const Home: NextPage<iPosts> = ({posts}) => {
  if(!posts) {
    return (
      <div className={styles.articles}>
        <p>Could not fetch posts:(</p>
        <p>Check back later...</p>
        
      </div>
        
    )
  }
  return (
    <div className={styles.articles}>
      <h1 style={{fontSize: "3rem"}}>Blog</h1>
      {posts.map((post, index) => (
        <ArticleCard key={index} title={post.title} link={`posts/${post.slug}`} description={post.description} date={post.date}/>
      ))}
    </div>
      
  )
}
export const getStaticProps = async () => {
  const data = await getAllPublished()
    if(!data) {
    return {
      props: { posts: null },
    };
  }
  return {
    props: { posts: data, revalidate: 600, },
  };
};

export default Home
