import Link from "next/link"
import styles from "./articlecard.module.css"
interface iProps {
  title: string
  date: string
  description: string
  link: string
}
export default function ArticleCard({title, date, description, link}:iProps) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <Link href={link}>
            <a className={styles.heading}>{title}</a>
            </Link>
            <div className={styles.date}>
                {date}
            </div>
        </div>
        <div className="preview">
          {description}
        </div>
        
    </div>
  )
}
