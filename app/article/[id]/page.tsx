import { type ReactNode, memo } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'article',
}

type Props = { params: { id: string } }

export default memo(function Article({ params: { id } }: Props) {
  return <div>article: {id}</div>
})
