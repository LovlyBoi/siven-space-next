import type { FC, ReactNode } from 'react'
import styles from './index.module.css'
import Link from 'next/link'

type Props = {
  children?: ReactNode
}

const data = [
  {
    id: '3tKJ2y8-8-4c1RHui7PIe',
    author: 'Siven',
    type: 1,
    title: '「提交规范」使用 cz-customizable 定义提交规范',
    pictures: ['http://siven.cc:12345/image/hevJcf8w5_XKRwGe.png'],
    tag: {
      name: 'git 规范',
      color: 'green',
    },
    publishDate: '2023-12-06T03:37:32.000Z',
    updateDate: '2023-12-06T03:37:32.000Z',
  },
]

const Card: FC<Props> = () => {
  return (
    <div className={styles['content-card']}>
      <div className="p-4 content theme-white-600-bg w-full box-border rounded-lg">
        <div className="card-header">
          <div
            className="header-tag text-xs font-light text-white inline-block mr-4"
            style={{ color: data[0].tag.color }}
          >
            123
          </div>
          <div className="update-time theme-gray-400-text text-xs inline-block cursor-default">
            发布于 123
          </div>
        </div>
        <Link
          href={`/article/${data[0].id}`}
          className="block card-title theme-gray-600-text hover:text-indigo-400 dark:hover:text-pink-300 tracking-wide my-3 transition-all duration-300 delay-75"
        >
          {data[0].title}
        </Link>
        <div className="card-pictures-wrapper w-full">
          <Link
            href={`/article/${data[0].id}`}
            className="picture bg-slate-400 overflow-hidden flex"
            // v-for="(picUrl, index) in pictures.slice(0, 4)"
          >
            {data[0].pictures.map((picUrl, index) => (
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
