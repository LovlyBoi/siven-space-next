import type { FC, ReactNode } from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import { Card as CardType } from '@/types'
import dayjs from 'dayjs'

type Props = {
  children?: ReactNode
  data: CardType
}

const Card: FC<Props> = ({ data }) => {
  return (
    <div className={styles['content-card']}>
      <div className="p-4 content theme-white-600-bg w-full box-border rounded-lg">
        <div className="card-header">
          <div
            className="header-tag text-xs font-light text-white inline-block mr-4"
            style={{ color: data.tag.color }}
          >
            { data.tag.name }
          </div>
          <div className="update-time theme-gray-400-text text-xs inline-block cursor-default">
            发布于 { dayjs(new Date(data.publishDate)).format('YYYY / M / DD ') }
          </div>
        </div>
        <Link
          href={`/article/${data.id}`}
          className="block card-title theme-gray-600-text hover:text-indigo-400 dark:hover:text-pink-300 tracking-wide my-3 transition-all duration-300 delay-75"
        >
          {data.title}
        </Link>
        <div className="card-pictures-wrapper w-full">
          <Link
            href={`/article/${data.id}`}
            className="picture bg-slate-400 overflow-hidden flex"
          >
            {data.pictures.slice(0, 4).map((picUrl, index) => (
              <img
                key={index}
                src={picUrl + '?w=500'}
                className="object-cover min-w-full min-h-full cursor-pointer"
              />
            ))}
          </Link>
        </div>
        <div className="card-footer theme-gray-400-text text-xs mt-3 flex gap-2">
          <div className="update-date">更新于：123</div>
          <div className="author">作者：123</div>
        </div>
      </div>
    </div>
  )
}

export default Card
