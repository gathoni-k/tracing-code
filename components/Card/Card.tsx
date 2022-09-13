import getDomain from '../../helpers/getDomain'
import styles from './card.module.scss'
interface iCard  {
    title: string,
    link: string,
    tag: string,
    name:string,
}
interface IObjectKeys {
    [key: string]: string;
  }
  

interface iColors extends IObjectKeys  {
    recent: string,
    general: string,
    coding:string,
    design:string,
    accessibility: string,
    writing: string,
    career: string
}
const colors: iColors =  {
    recent: "#C6DCE4",
    general: "#E8DEEE",
    coding:"#FFE2DD",
    design:"#D3E5EF",
    accessibility: "#FFE2DD",
    writing: "#FFE2DD",
    career: "#FADEC9"
}

export default function Card({ link, tag, name}:iCard) {
    let domain = getDomain(link)
    let bgColor = colors[tag]
  return (
    <li className={styles.card} >
        <section>
            <h2>{name}<span className={styles.hover} aria-hidden="true">↗</span></h2>
            <a href={link} target={"_blank"} rel="noreferrer" >{domain}</a>
        </section>
        <section>
            <span className={styles.tag} style={{backgroundColor: `${bgColor}`}}>{tag}</span>
        </section>
    </li>
  )
}
