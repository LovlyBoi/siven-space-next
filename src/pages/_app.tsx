import type { AppProps /*, AppContext */ } from 'next/app'
import './global.css'
import { memo } from 'react'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default memo(App)
