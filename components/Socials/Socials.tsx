import Image from 'next/image'
import styles from './socials.module.css'
export default function Socials() {
  return (
    <div className={styles.container}  >
          <a href='https://github.com/gathoni-k' title='Github' target={"_blank"} rel="noreferrer" className={styles.button}>
            <Image src='/github.svg' alt='Github' aria-hidden="true" className={styles.img} width="16" height="16"/>
          </a>
        <a href='https://linkedin.com/marygathoni' title='LinkedIn' target={"_blank"} rel="noreferrer" className={styles.button}>
            <Image src='/linkedin.svg' aria-hidden="true" alt='Linkedin' className={styles.img} width="16" height="16"/>
            </a>
      
    </div>
  )
}
