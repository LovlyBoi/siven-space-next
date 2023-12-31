import type { FC, ReactNode } from 'react'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'

const PageIndex: FC = () => {
  return (
    <RootLayout>
      <CardContainer></CardContainer>
    </RootLayout>
  )
}

export default PageIndex
