'use client'
import { type FC, type ReactNode, useState } from 'react'
import styles from './themeSwitcher.module.css'
import { useDarkMode } from '@/utils/useDarkMode'

type Props = {
  children?: ReactNode
}

const ThemeSwitcher: FC<Props> = () => {
  const [theme, setTheme] = useDarkMode()

  const isDarkMode = theme === 'dark'

  return (
    <>
      <input
        type="checkbox"
        id={styles['theme-switcher']}
        checked={isDarkMode}
        onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
      />
      <label
        className={styles['theme-switcher-label']}
        htmlFor={styles['theme-switcher']}
      >
        <span></span>
      </label>
    </>
  )
}

export default ThemeSwitcher
