import Image from "next/image"
import Link from "next/link"
import styles from "../styles/404.module.scss"
export default function Projects() {
  return (
    <div className={styles.container}>
        <Image src="/Freelancer.svg" alt="" width={400} height={400}/>
        <p>This page is in the works!</p>
    </div>
  )
}
