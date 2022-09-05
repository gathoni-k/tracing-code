import { getAllPosts, getSinglePost } from "../../helpers/md";
import styles from "../../styles/Home.module.css";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {postProps} from "../types"
import Head from "next/head";
import Socials from "../../components/Socials/Socials";
import Date from "../../components/Date/Date";
import Header from "../../components/Header/Header";
interface CodeBlockProps {
    language: string
    codestring: string
  }
const CodeBlock = ({ language, codestring }: CodeBlockProps) => {
return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
        {codestring}
    </SyntaxHighlighter>
)
}
const Post = ({ content, frontmatter }:postProps) => {
    if (!frontmatter) return <></>
  return (
    <div className={styles.container}>
        <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content="Code things I learn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.upperSection}>
        <Date></Date>
        <Socials></Socials>
      </div>
      <Header/>
      <p>{frontmatter.tags.join(', ')}</p>
    <h2 className={styles.articleheading}>{frontmatter.title}</h2>
    <span className={styles.articledate}>{frontmatter.publishedDate}</span>

      <ReactMarkdown
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <CodeBlock
              codestring={String(children).replace(/\n$/, '')}
              language={match[1]}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}>{content}</ReactMarkdown>
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