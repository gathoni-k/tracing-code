import styles from "../../styles/Home.module.css";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {postProps} from "../../lib/types"
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
const Post = ({ metadata, markdown }:postProps) => {
    if (!metadata) return <></>
  return (
      <>
      <p>{metadata.tags.join(', ')}</p>
    <h2 className={styles.articleheading}>{metadata.title}</h2>
    <span className={styles.articledate}>{metadata.date}</span>
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
      }}>{markdown}</ReactMarkdown>
      </>
  );
};

type params =  {
    slug: string
}
interface iProps {
    params: params
}
export const getStaticProps = async ({ params }:iProps) => {
  const data = await fetch(`http://localhost:3000/api/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const response = await data.json()
  const post = response.post
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(`http://localhost:3000/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const response = await data.json()
  const posts = response.posts
  const paths = posts.map(({ slug }:{slug:string}) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;