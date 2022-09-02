import Image from 'next/image'
import styles from './socials.module.css'
export default function Socials() {
  return (
    <div className={styles.container}>
        <span className={styles.imageWrapper}>
            <Image src='/github.svg' alt='Github' className={styles.img} width="16" height="16"/>
        </span>
        <span className={styles.imageWrapper}>
            <Image src='/linkedin.svg' alt='Github' className={styles.img} width="16" height="16"/>
        </span>
        <span className={styles.imageWrapper}>
            <Image src='/email.svg' alt='Github' className={styles.img} width="16" height="16"/>
        </span>
    </div>
  )
}
