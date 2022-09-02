import styles from './pill.module.css'

export default function Pill({text, background}:{text: string, background: string}) {
  return (
    <button className={styles.button} style={{backgroundColor: background}}>{text}</button>
  )
}
