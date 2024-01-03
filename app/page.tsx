'use client'
import { type FC, memo, useEffect } from 'react'
import RootLayout from './layout'
import CommomHeader from '@/components/NavHeader/CommomHeader'
import CardContainer from '@/components/CardContainer'
import { fetchMasonry } from '@/utils/startMasonry'

const PageIndex: FC = () => {
  useEffect(() => {
    fetchMasonry()
  }, [])

  return (
    <RootLayout>
      <div className="width-limit max-w-screen-lg mx-1 sm:mx-4 lg:mx-auto">
        <CommomHeader />
        <CardContainer></CardContainer>
      </div>
    </RootLayout>
  )
}

export default memo(PageIndex)
