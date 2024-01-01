import { type FC, type ReactNode, memo } from 'react'

type Props = {
  children?: ReactNode
}

const HeadIndex: FC<Props> = () => {
  return <div>HeadIndex</div>
}

export default memo(HeadIndex)
