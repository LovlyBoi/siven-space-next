import { type ReactNode, type FC, memo } from 'react'
import CommomHeader from '@/components/NavHeader/CommomHeader'

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className="width-limit max-w-screen-lg mx-1 sm:mx-4 lg:mx-auto">
      <CommomHeader />
      <main>{children}</main>
    </div>
  )
}

export default memo(RootLayout)
