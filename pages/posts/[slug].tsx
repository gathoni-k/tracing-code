import { getAllPosts, getSinglePost } from "../../helpers/md";
import styles from "../../styles/Home.module.css";
import ReactMarkdown from 'react-markdown'
interface postFrontMatter {
    title: string
    metaTitle: string
    metaDesc: string
    isPublished: boolean
    publishedDate: string
    tags: string[]
  }
interface postProps {
    slug: string
    siteTitle: string
    frontmatter: postFrontMatter
    content: any
  }
  
const Post = ({ content, frontmatter }:postProps) => {
    if (!frontmatter) return <></>
  return (
    <div className={styles.container}>
        <h1>{frontmatter.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

type params =  {
    slug: string
}
interface iProps {
    params: params
}
export const getStaticProps = async ({ params }:iProps) => {
  const post = await getSinglePost(params.slug, "posts");
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts("posts").map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;