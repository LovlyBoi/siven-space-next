import { type FC, memo } from 'react'
import { type Metadata } from 'next'
import Script from 'next/script'
import CommomHeader from '@/components/NavHeader/CommomHeader'
import CardContainer from '@/components/CardContainer'

export const metadata: Metadata = {
  title: 'Siven Space',
}

const PageIndex: FC = () => {
  return (
    <>
      {/* 引入masonry-layout.js */}
      <Script src="/js/masonryLayout.js"></Script>
      <div className="width-limit max-w-screen-lg mx-1 sm:mx-4 lg:mx-auto">
        <CommomHeader />
        <CardContainer></CardContainer>
      </div>
    </>
  )
}

export default memo(PageIndex)
