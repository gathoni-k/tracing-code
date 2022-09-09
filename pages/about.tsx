import React from 'react'
import ReactMarkdown from 'react-markdown';

function About({content}:{content:string}) {
  return (
    <div>
        <h1>About</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
        
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(`http://localhost:3000/api/about`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const response = await data.json()
  const content = response.content
  return {
    props: { content },
  };
}



export default About