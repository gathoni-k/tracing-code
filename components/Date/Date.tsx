import { useEffect, useState } from "react"
import getToday from "../../helpers/getToday"
import styles from "./date.module.css"
export default function Date() {
  const [today, settoday] = useState('')
  useEffect(() => {
    const date = getToday()
    settoday(date)
  }, [today])
  
  return (
    <div className={styles.date}>{today}</div>
  )
}
