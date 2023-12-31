import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="width-limit max-w-screen-lg mx-1 sm:mx-4 lg:mx-auto">
      <header>Header</header>
      <main>{children}</main>
    </div>
  )
}
