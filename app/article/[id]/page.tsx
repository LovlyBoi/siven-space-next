import type { FC, ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'article',
}

const Article: FC = () => {
  return (
    <>
      <div>Article</div>
    </>
  )
}

export default Article
