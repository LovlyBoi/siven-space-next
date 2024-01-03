import { type FC, memo } from 'react'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'

const PageIndex: FC = () => {
  console.log('axiosBaseUrl', process.env.AXIOS_BASEURL)

  return (
    <RootLayout>
      <CardContainer></CardContainer>
    </RootLayout>
  )
}

export default memo(PageIndex)

// export async function getStaticProps() {
//   return {
//     props: {
//       axiosBaseUrl: process.env.AXIOS_BASEURL,
//     },
//   }
// }
