import { type ReactNode, type FC, memo } from 'react'
import './global.css'

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

export default memo(RootLayout)
