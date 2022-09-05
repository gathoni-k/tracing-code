import { getAllPosts, getSinglePost } from "../../helpers/md";
import styles from "../../styles/Home.module.css";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {postProps} from "../types"
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
        <h1>{frontmatter.title}</h1>
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