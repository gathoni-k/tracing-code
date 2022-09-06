import Link from 'next/link'
import styles from './pill.module.css'

export default function Pill({text, background, link}:{text: string, background: string, link:string}) {
  return (
    <Link href={link}>
      <a className={styles.button} style={{backgroundColor: background}}>{text}</a>
    </Link>
  )
}
