import React from 'react'
import ReactMarkdown from 'react-markdown';
import { getAboutPage } from '../helpers/notion';

function About({content}:{content:string}) {
  if(!content) return <p>Looks as if you are offline</p>
  return (
    <div>
        <h1>About</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        
    </div>
  )
}

export const getStaticProps = async () => {
  const content = await getAboutPage()
  return {
    props: { content },
  };
}



export default About