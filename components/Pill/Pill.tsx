import Image from 'next/image'
import Link from 'next/link'
import styles from './pill.module.css'

export default function Pill({text, background, link, external}:{text: string, background: string, link:string, external:boolean}) {
  if(external) {
    return (
      <a href={link} target={"_blank"} rel="noreferrer" className={styles.button} style={{backgroundColor: background}}>
        {text}
          <Image src='/arrow-right-up.svg' alt='Arrow right up'  width="16" height="16"/>
      </a>
  )
  }
  return (
    <Link href={link}>
      <a className={styles.button} style={{backgroundColor: background}}>{text}</a>
    </Link>
  )
  
}
