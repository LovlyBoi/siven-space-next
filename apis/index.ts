import { Card } from '../app/types'
import { request } from '../utils/request'

export function getBlogsByType(type: string) {
  return request<{ cards: Card[]; hasNext: boolean }>({
    method: 'GET',
    url: '/blogs',
    params: {
      type,
    },
  })
}
