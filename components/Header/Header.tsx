import Link from "next/link"
import styles from "./header.module.css"
export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a> tracing code</a>
      </Link>
    </div>
    
  )
}
