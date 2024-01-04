import { type ReactNode, memo } from 'react'
import CardContainer from '@/components/CardContainer'

export default memo(function Notes() {
  return <CardContainer type="notes" />
})
