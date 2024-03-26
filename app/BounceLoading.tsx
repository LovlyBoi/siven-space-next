'use client'
import { type FC, useEffect } from 'react'

const BounceLoading: FC = () => {
  useEffect(() => {
    // 由于使用了web components，需要动态引入
    // 完全使用csr
    import('ldrs/bouncy')
  }, [])

  return (
    <div>
      <l-bouncy size="80" speed="1.75" color="black"></l-bouncy>
    </div>
  )
}

export default BounceLoading
