import getDomain from '../../helpers/getDomain'
import styles from './card.module.scss'
interface iCard  {
    title: string,
    link: string,
    tag: string
}
export default function Card({title, link, tag}:iCard) {
    let domain = getDomain(link)
  return (
    <li className={styles.card}>
        <section>
            <h2>{title}<span className={styles.hover} aria-hidden="true">↗</span></h2>
            <a href={link} target={"_blank"} rel="noreferrer" >{domain}</a>
        </section>
        <section>
            <span className={styles.tag}>{tag}</span>
        </section>
    </li>
  )
}
