import { type FC, memo } from 'react'
import RootLayout from '@/layouts/RootLayout'
import CardContainer from '@/components/CardContainer'
// import { useMasonry } from '@/utils/useMasonry'
// import { useRef , nextTick } from 'react'

const PageIndex: FC = () => {
  console.log('axiosBaseUrl', process.env.AXIOS_BASEURL)
  // let cardState = useRef('preparing')

  // const masonry = () =>
  //   nextTick(() =>
  //     useMasonry('.card-container', {
  //       itemSelector: '.content-card',
  //       gutter: 10,
  //     })
  //   )
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
