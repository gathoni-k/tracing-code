import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'


const Home:NextPage = () => {
  return (
    <div className={styles.articles}>
      <p style={{fontSize: "4rem",  lineHeight: "0.2rem"}}>Hi there, I&apos;m Mary.</p>
      <p style={{fontSize: "4rem", lineHeight: "0.4rem"}}>Frontend developer and technical writer.</p>
      <p style={{lineHeight: "2.8rem"}}>I strongly believe that accessibility should not be an afterthought and must be ingrained in the development process. 
      This is why I strive to build components that not only solve a problem but are also accessible. </p>
      <p>As I create my side projects, I have had to relearn how to write accessible code. It&apos;s a learning journey that I am still on.</p>
      <section>
        <h1>My Skills</h1>
        <p>I am mostly immersed in the JavaScript ecosytem and most of my skills are in that area.</p>
        <ul>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Nextjs</li>
          <li>Node</li>
          <li>Git</li>
          <li>SQL</li>
        </ul>
        <p>I am also continuosly learning and have taken online courses like <strong>CSS for JavaScript developers</strong>, <strong>JavaScript30</strong>, and <strong>Advanced React.</strong> I am currently taking, <strong>JavaScript the weird parts.</strong></p>
      </section>
      <section>
        <h1>Projects I have worked on</h1>
      </section>
    </div>
      
  )
}

export default Home
