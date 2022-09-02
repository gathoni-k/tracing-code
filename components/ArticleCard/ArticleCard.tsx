import styles from "./articlecard.module.css"
export default function ArticleCard() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.heading}>Create an active Nextjs link</div>
            <div className={styles.date}>
                SEPTEMBER 2, 2022
            </div>
        </div>
        <div className="preview">
        Here&rsquo;s how to remove a remote Git branch without using an app or a website user interface, say, GitHub or GitLab.
        </div>
        
    </div>
  )
}
