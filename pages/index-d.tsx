import { type FC, memo, useEffect } from 'react'
import RootLayout from '../app/layout'
import CardContainer from '../components/CardContainer'
import { fetchMasonry } from '@/utils/startMasonry'

const PageIndex: FC = () => {
  useEffect(() => {
    fetchMasonry()
  }, [])

  return (
    <RootLayout>
      <CardContainer></CardContainer>
    </RootLayout>
  )
}

export default memo(PageIndex)
