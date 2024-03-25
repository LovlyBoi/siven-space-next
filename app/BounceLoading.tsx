'use client'
import { type FC } from 'react'
import { bouncy } from 'ldrs'

bouncy.register()

const BounceLoading: FC = () => {
  return (
    <div>
      <l-bouncy size="80" speed="1.75" color="black"></l-bouncy>
    </div>
  )
}

export default BounceLoading
