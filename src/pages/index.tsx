import { type FC, memo } from 'react'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'

const PageIndex: FC<{
  axiosBaseUrl: string
}> = ({ axiosBaseUrl }) => {
  console.log('axiosBaseUrl', axiosBaseUrl)

  return (
    <RootLayout>
      <CardContainer></CardContainer>
    </RootLayout>
  )
}

export default memo(PageIndex)

export async function getStaticProps() {
  return {
    props: {
      axiosBaseUrl: process.env.AXIOS_BASEURL,
    },
  }
}
