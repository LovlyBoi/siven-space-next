import type { FC, ReactNode } from 'react'
import Card from '../Card'
import { getBlogsByType } from '@/apis'
import { useState, useEffect } from 'react'

type Props = {
  children?: ReactNode
  type?: string
}

const CardContainer: FC<Props> = ({ type = 'all' }) => {
  const [cards, setCards] = useState([])

  const getBlogs = () => {
    return getBlogsByType(type)
  }

  useEffect(() => {
    getBlogs().then((res) => {
      console.log(res, '------------- ')
      // setCards(res.data)
    })
  })
  return (
    <div>
      <Card />
    </div>
  )
}

export default CardContainer
