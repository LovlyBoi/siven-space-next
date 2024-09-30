'use client'
import { type FC, type ReactNode, useEffect, useRef } from 'react'
import { observeElements } from '@/utils/intersectionObserver'
import { useActiveHashStore } from './activeHashStore'
import localFont from 'next/font/local'

const LXGNeoZhiSongScreen = localFont({
  src: './fonts/LXGWNeoZhiSongScreen.ttf',
  variable: '--font-zhi-song-screen',
  weight: '100 900',
  display: 'swap',
})

type Props = {
  children?: ReactNode
  parsedHtml?: string
}

const ArticleBody: FC<Props> = ({ parsedHtml }) => {
  const setActiveHash = useActiveHashStore((store) => store.setActiveHash)

  // 响应值每次更新会变，需要一个 ref 保存起来
  const setterRef = useRef(setActiveHash)

  useEffect(() => {
    observeElements(
      '.marked h1, .marked h2, .marked h3, .marked h4, .marked h5, .marked h6',
      (hash) => {
        setterRef.current(hash)
      },
    )
  }, [])

  return (
    <main className="scrollbar pt-[68px] md:pt-[60px] px-4 sm:ml-44 md:ml-44 lg:ml-60 xl:ml-72 overflow-auto pb-32">
      <article
        style={LXGNeoZhiSongScreen.style}
        className={`marked max-w-[720px] mx-auto text-l-gray-800-d-gray-200  box-border text-[16px] md:text-[18px]`}
        dangerouslySetInnerHTML={{ __html: '<p></p>' + (parsedHtml ?? '') }}
      ></article>
    </main>
  )
}

export default ArticleBody
