import { type ReactNode, type FC, memo } from 'react'
import './global.css'
import DarkMode from './DarkMode'

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <html lang="zh-CN">
      <body>
        <DarkMode>{children}</DarkMode>
      </body>
    </html>
  )
}

export default memo(RootLayout)
