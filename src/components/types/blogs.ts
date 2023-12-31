export interface Card {
  id: string
  title: string
  author: string
  type: BlogType
  tag: { name: string; color: TagColor }
  publishDate: string
  updateDate: string
  pictures: string[]
}

export type TagColor = 'yellow' | 'pink' | 'green' | 'indigo'

export enum BlogType {
  'front-end-tec' = 1,
  'node',
  'math',
  'life',
  'back-end-tec',
  'other-tec',
}
