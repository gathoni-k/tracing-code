import Image from 'next/image'
import Link from 'next/link'
import styles from './navlink.module.scss'
import { useRouter } from 'next/router';
export default function Pill({text, link, external}:{text: string, link:string, external:boolean}) {
  const router = useRouter();
  const active = router.pathname == link
  if(external) {
    return (
      <a href={link} target={"_blank"} rel="noreferrer" className={styles.button}>
        {text}
          <Image src='/arrow-right-up.svg' alt='Arrow right up'  width="16" height="16"/>
      </a>
  )
  }
  return (
    <Link href={link}>
      <a className={styles.button} style={{borderBottom:active?'2px solid #9f5e26':'none', fontWeight:active?'600':'400'}}>{text}</a>
    </Link>
  )
  
}
