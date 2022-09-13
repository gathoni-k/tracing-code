import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs";
import styles from "./themetoggler.module.css"

export default function ThemeToggler() {
      const [theme, settheme] = useState("dark")
      const handleToggle = () => {
        const newTheme = theme ==="light"?"dark":"light"
        settheme(newTheme)
        storeUserSetPreference(newTheme)
        document.body.dataset.theme = theme
      }
      const storeUserSetPreference = (pref:string) => {
        localStorage.setItem("theme", pref);
      };
      const getUserSetPreference = () => {
        return localStorage.getItem("theme");
      };
      
    useEffect(() => {
        const getMediaQueryPreference = () => {
            const mediaQuery = "(prefers-color-scheme: dark)";
            const mql = window.matchMedia(mediaQuery);
            const hasPreference = typeof mql.matches === "boolean";
            if (hasPreference) {
              return mql.matches ? "dark" : "light";
            }
            return theme
          };
        const userSetPreference = getUserSetPreference();
        const mediaQueryPreference = getMediaQueryPreference();
        if(userSetPreference) {
            settheme(userSetPreference)
        } else {
            settheme(mediaQueryPreference)
        }
        document.body.dataset.theme = theme

    }, [theme])

  return (
    <>
        <button aria-label='toggle dark mode' className={styles.theme} onClick={handleToggle}>
            {theme=== "dark"?<BsSun className={styles.themeicon} aria-hidden="true"/>:<BsMoon aria-hidden="true" className={styles.themeicon}/>}
        </button>
    </>
  )
}
