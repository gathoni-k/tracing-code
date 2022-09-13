import Image from "next/image"
import Link from "next/link"
import styles from "../styles/404.module.scss"
export default function Custom404() {
  return (
    <div className={styles.container}>
        <Image src="/404.svg" alt="404. Sorry! Page not found. " width={300} height={300}/>
        <p>Checkout the <Link href='/'>recent posts</Link> or <Link href='/projects'>latest project</Link> on the site!</p>
    </div>
  )
}



