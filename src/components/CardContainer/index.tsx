import type { FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  type?: string
}

const CardContainer: FC<Props> = ({ type }) => {
  return (
    <div>CardContainer: {type}</div>
  )
}

export default CardContainer
