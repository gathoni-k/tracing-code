import styles from './navbar.module.css'
import NavLink from '../NavLink/NavLink'

export default function Navbar() {
  return (
    <div className={styles.categoryWrapper}>
        <NavLink text="blog" link="/" external={false}/>
        <NavLink text="about" link="/about" external={false}/>
        <NavLink text="reading"  link="/reading-list" external={false}/>
        <NavLink text="projects" link="/projects" external={false}/>
    </div>
  )
}
