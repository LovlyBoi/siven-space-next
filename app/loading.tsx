import { type FC, type ReactNode } from 'react'
import BounceLoading from './BounceLoading'

type Props = {
  children?: ReactNode
}

const Loading: FC<Props> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center flex-col gap-1">
        <BounceLoading></BounceLoading>
        Loading..
      </div>
    </div>
  )
}

export default Loading
