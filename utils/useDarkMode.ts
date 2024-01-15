import { useClient, useWindow } from './useClient'

type ThemeMode = 'light' | 'dark'

function setTheme(mode: ThemeMode) {
  const html = document.documentElement
  if (mode === 'light') {
    html.classList.remove('dark')
  } else if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    throw Error('Unknown Mode: ' + mode)
  }
}

let handleThemeChange: (e: MediaQueryListEvent) => void

export function useDarkMode() {
  useClient(() => {
    const mqList =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

    if (mqList) {
      if (!handleThemeChange) {
        handleThemeChange = (e) => {
          const mode = e.matches ? 'dark' : 'light'
          console.log(mode)
          setTheme(mode)
        }
        mqList.addEventListener('change', handleThemeChange)
      }
    }
  })
}
