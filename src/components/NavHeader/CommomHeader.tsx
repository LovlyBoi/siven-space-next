import { useState, type FC, type ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '@/assets/avatar.jpg'
import styles from './index.module.css'

type Props = {
  children?: ReactNode
}

const navList: {
  title: string
  to?: string
  render?: (mobile?: boolean) => ReactNode
}[] = [
  {
    title: '全部',
    to: '/',
  },
  {
    title: '笔记',
    to: '/classes/notes',
  },
  {
    title: '生活随笔',
    to: '/classes/essays',
  },
]

const CommomHeader: FC<Props> = () => {
  const [expend, setExpend] = useState(false)

  const handleExpendChange = (checked: boolean) => {
    setExpend(checked)
  }

  return (
    <div className={styles['nav-header']}>
      <div className="header-wrapper sm:inline-block">
        <input
          type="checkbox"
          id="extend-header-btn"
          className="hidden"
          checked={expend}
          onChange={(e) => handleExpendChange(e.target.checked)}
        />
        <header className="header theme-white-600-bg p-4 mt-2 rounded-lg shadow-sm flex sm:mt-4 md:mt-24 items-center">
          <div className="left flex items-center mr-6">
            <Link
              href="/"
              className="block w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden"
            >
              <Image
                src={avatar}
                alt="siven avatar"
                className="block w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden"
              />
            </Link>
            <div className="flex flex-col ml-2">
              <Link
                href="/"
                className="theme-gray-600-text text-sm sm:text-lg tracking-wider"
              >
                浅秋细语
              </Link>
              <div className="theme-gray-400-text text-xs tracking-wider font-thin">
                智文的前端小站
              </div>
            </div>
          </div>

          <CSSTransition
            in={expend}
            classNames="draw"
            timeout={300}
            appear
            unmountOnExit
          >
            <ul className="nav-list theme-gray-400-text flex items-center h-8 overflow-x-hidden">
              {navList.map((nav) => (
                <li className="px-6 whitespace-nowrap" key={nav.title}>
                  {nav.render ? (
                    nav.render()
                  ) : (
                    <Link href={nav.to ?? '/'}>{nav.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </CSSTransition>

          <div className="right flex items-center mr-4 ml-6">
            {/* 手机菜单按钮 */}
            {/* <label className="menu-static">
              <div></div>
              <div></div>
              <div></div>
            </label> */}
            {/* 大屏幕展开菜单按钮 */}
            {expend ? (
              <label
                htmlFor="extend-header-btn"
                className={styles['cross-movable']}
              >
                <div />
                <div />
              </label>
            ) : (
              <label
                htmlFor="extend-header-btn"
                className={styles['menu-movable']}
              >
                <div />
                <div />
                <div />
              </label>
            )}
          </div>
        </header>
      </div>
    </div>
  )
}

export default CommomHeader
