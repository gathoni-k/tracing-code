import type { NextPage } from 'next'
import ArticleCard from '../components/ArticleCard/ArticleCard'
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
      {posts.map((post, index) => (
        <ArticleCard key={index} title={post.title} link={`posts/${post.slug}`} description={post.description} date={post.date}/>
      ))}
    </div>
      
  )
}
export const getStaticProps = async () => {
  const data = await fetch(`http://localhost:3000/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  
  const response = await data.json()
  if(!response) {
    return {
      props: { posts: null },
    };
  }
  return {
    props: { posts: response.posts },
  };
};

export default Home
