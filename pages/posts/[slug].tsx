import styles from "../../styles/Home.module.css";
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {postProps} from "../../lib/types"
import { getAllPublished, getSingleBlogPostBySlug } from "../../helpers/notion";
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
      
    <h2 className={styles.articleheading}>{metadata.title}</h2>
    <span className={styles.articledate}>{metadata.date}</span>
    <p style={{color: "gray"}}>{metadata.tags.join(', ')}</p>
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
  const post = await getSingleBlogPostBySlug(params.slug)
  return {
    props: { ...post, revalidate: 600, },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished()
  const paths = posts.map(({ slug }:{slug:string}) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;