import type { FC } from 'react'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'

const PageIndex: FC<{
  axiosBaseUrl: string
}> = ({ axiosBaseUrl }) => {
  return (
    <RootLayout>
      <div>{axiosBaseUrl}</div>
      <CardContainer></CardContainer>
    </RootLayout>
  )
}

export default PageIndex

export async function getStaticProps() {
  return {
    props: {
      axiosBaseUrl: process.env.AXIOS_BASEURL,
    },
  }
}
