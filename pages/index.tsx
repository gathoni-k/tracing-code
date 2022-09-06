import type { NextPage } from 'next'
import ArticleCard from '../components/ArticleCard/ArticleCard'
import { getAllPublished } from '../helpers/md'
import styles from '../styles/Home.module.css'
import {postProps} from './types'

interface iPosts {
    posts: postProps[]
}

const Home: NextPage<iPosts> = ({posts}) => {
  return (
    <div className={styles.articles}>
      {posts.map((post, index) => (
        <ArticleCard key={index} title={post.frontmatter.title} link={`posts/${post.slug}`} description={post.frontmatter.metaDesc} date={post.frontmatter.publishedDate}/>
      ))}
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
