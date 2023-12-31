import type { FC } from 'react'
import { useRouter } from 'next/router'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'

const Classes: FC = () => {
  const router = useRouter()
  const { type } = router.query

  return (
    <RootLayout>
      <CardContainer type={type as string}></CardContainer>
    </RootLayout>
  )
}

export default Classes
