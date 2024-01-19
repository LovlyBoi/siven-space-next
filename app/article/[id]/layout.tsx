import { type ReactNode, type FC, memo } from 'react'
import PlainHeader from '@/app/NavHeader/PlainHeader'

const ArticleLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <div>
        <PlainHeader />
        {children}
      </div>
    </>
  )
}

export default memo(ArticleLayout)
