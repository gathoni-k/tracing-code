import type { NextPage } from 'next'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import { postMetaProps } from '../lib/types'
import {getAllPublished} from '../helpers/notion'
import styles from '../styles/Home.module.css'

interface iPosts {
    posts: postMetaProps[]
}

const Home: NextPage<iPosts> = ({posts}) => {
  return (
    <div className={styles.articles}>
      {posts.map((post, index) => (
        <ArticleCard key={index} title={post.title} link={`posts/${post.id}`} description={post.description} date={post.date}/>
      ))}
    </div>
      
  )
}
export const getStaticProps = async () => {
  const posts = await getAllPublished();
  return {
    props: { posts },
  };
};

export default Home
