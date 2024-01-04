'use client'
import { useState, useEffect, memo } from 'react'
import type { FC, ReactNode } from 'react'
import Card from '@/components/Card'
import { masonryLoayout } from '@/utils/startMasonry'
import { getBlogsByType } from '@/apis'
import type { Card as CardType } from '@/types'

type Props = {
  children?: ReactNode
  type?: string
}

const CardContainer: FC<Props> = ({ type = 'all' }) => {
  const [cards, setCards] = useState<CardType[]>([])

  const getBlogs = () => getBlogsByType(type)

  useEffect(() => {
    let ignore = false

    getBlogs().then(
      ({ cards, hasNext }) => {
        if (ignore) return null
        setCards(cards)
        // 等待 React 完成渲染
        setTimeout(() => {
          masonryLoayout('.card-container', {
            itemSelector: '.content-card',
            gutter: 10,
          })
        }, 1)
      },
      (error) => {
        console.error(error)
      },
    )

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="card-container w-full py-6">
      {cards.map((card, index) => (
        <Card data={card} key={index} />
      ))}
    </div>
  )
}

export default memo(CardContainer)
