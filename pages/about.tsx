import React from 'react'
import ReactMarkdown from 'react-markdown';
import { getSinglePost } from '../helpers/md';

function About({content}:{content:string}) {
  return (
    <div>
        <h1>About</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        
    </div>
  )
}

export const getStaticProps = async () => {
    const content = await getSinglePost('/about', 'lib')
    return {
        props: {...content}
    }
}



export default About