import type { FC, ReactNode } from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import { Card as CardType, TagColor } from '@/types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

type Props = {
  children?: ReactNode
  data: CardType
}

const mapColor: { [k in TagColor]: string } = {
  yellow: 'bg-yellow-400',
  pink: 'bg-pink-400',
  indigo: 'bg-indigo-400',
  green: 'bg-green-400',
}

const Card: FC<Props> = ({ data }) => {
  return (
    <div className={styles['content-card']}>
      <div className="p-4 content theme-white-600-bg w-full box-border rounded-lg">
        <div>
          <div
            className={`rounded text-xs p-1 font-light text-white inline-block mr-4 ${
              mapColor[data.tag.color]
            }`}
          >
            {data.tag.name}
          </div>
          <div className="update-time theme-gray-400-text text-xs inline-block cursor-default">
            发布于 {dayjs(new Date(data.publishDate)).format('YYYY / M / DD ')}
          </div>
        </div>
        <Link
          href={`/article/${data.id}`}
          className="block card-title theme-gray-600-text hover:text-indigo-400 dark:hover:text-pink-300 tracking-wide my-3 transition-all duration-300 delay-75"
        >
          {data.title}
        </Link>
        <div
          className={
            styles[
              `pictures-${data.pictures.length > 4 ? 4 : data.pictures.length}`
            ] + 'w-full'
          }
        >
          <Link
            href={`/article/${data.id}`}
            className={
              styles['picture'] + 'rounded 12 bg-slate-400 overflow-hidden flex'
            }
          >
            {data.pictures.slice(0, 4).map((picUrl, index) => (
              <img
                key={index}
                src={picUrl + '?w=500'}
                className="picture min-w-full min-h-full cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            ))}
          </Link>
        </div>
        <div className="card-footer theme-gray-400-text text-xs mt-3 flex gap-2">
          <div className="update-date">
            更新于：{dayjs(new Date(data.updateDate)).fromNow()}
          </div>
          <div className="author">作者：{data.author}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
