import getToday from "../../helpers/getToday"
import styles from "./date.module.css"
export default function Date() {
    const today = getToday()
  return (
    <div className={styles.date}>{today}</div>
  )
}
