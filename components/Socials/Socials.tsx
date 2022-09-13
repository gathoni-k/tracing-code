import Image from 'next/image'
import styles from './socials.module.css'
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import ThemeToggler from '../ThemeToggler/ThemeToggler';
export default function Socials() {
  return (
    <div className={styles.container}  >
          <a href='https://github.com/gathoni-k' title='Github' target={"_blank"} rel="noreferrer" className={styles.button}>
          
          <FaGithub aria-hidden="true" size={16}/>
            {/* <Image src='/github.svg' alt='' aria-hidden="true" className={styles.img} width="16" height="16"/> */}
          </a>
        <a href='https://linkedin.com/marygathoni' title='LinkedIn' target={"_blank"} rel="noreferrer" className={styles.button}>
        <FaLinkedinIn aria-hidden="true" size={16}/>
            {/* <Image src='/linkedin.svg' aria-hidden="true" alt='Linkedin' className={styles.img} width="16" height="16"/> */}
            </a>
            <span style={{marginLeft: "1.4rem"}}>
                    <ThemeToggler/>

            </span>
    </div>
  )
}
