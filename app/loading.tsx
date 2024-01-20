import { type FC, type ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Loading: FC<Props> = () => {
  return (
    <html lang="zh-CN">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>Index Loading..</body>
    </html>
  )
}

export default Loading
