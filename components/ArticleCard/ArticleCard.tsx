import Link from "next/link"
import styles from "./articlecard.module.scss"
interface iProps {
  title: string
  date: string
  description: string
  link: string
}
export default function ArticleCard({title, date, description, link}:iProps) {
  return (
    <section className={styles.card}>
        <div className={styles.header}>
            <h2><Link href={link}>
            <a>{title}</a>
            </Link></h2>
            <div className={styles.date}>
                {date}
            </div>
        </div>
        <p>
          {description}
        </p>
        
    </section>
  )
}
