import type { FC, ReactNode } from 'react'
import Card from '../Card'
import { getBlogsByType } from '@/apis'
import { useState, useEffect } from 'react'
import { Card as CardType } from '@/types'

type Props = {
  children?: ReactNode
  type?: string
}

const CardContainer: FC<Props> = ({ type = 'all' }) => {
  const [cards, setCards] = useState<CardType[]>([])

  const getBlogs = () => {
    return getBlogsByType(type)
  }

  useEffect(() => {
    getBlogs().then(({ cards, hasNext }) => {
      setCards(cards)
    })
  }, [])

  return (
    <div>
      <div className="card-container w-full py-6" v-if="cardState === 'loaded'">
        {cards.map((card, index) => (
          <Card data={card} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CardContainer
