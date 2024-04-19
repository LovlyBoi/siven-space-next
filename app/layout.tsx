import { type ReactNode, type FC, memo } from 'react'
import DarkMode from './DarkMode'
import './global.css'

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <html lang="zh-CN">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        name="description"
        content="智文的前端博客，一个分享前端技术、学习前端知识、记录前端生活的地方。"
      />
      <meta
        name="keywords"
        content="node,vue,typescript,ts,react,前端,博客,技术,学习,生活,前端博客,前端技术博客,前端学习博客,前端生活博客"
      />
      <body>
        <DarkMode>{children}</DarkMode>
      </body>
    </html>
  )
}

export default memo(RootLayout)
