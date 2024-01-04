interface MasonryOptions {
  itemSelector?: string
  columnWidth?: number
  gutter?: number
  fitWidth?: boolean
}

// 需要动态加载Masonry，不然这个库导入后会在服务端操作window
// let Masonry: any

// export async function fetchMasonry() {
//   if (Masonry) return Masonry
//   Masonry = (await import('masonry-layout')).default
//   return Masonry
// }

// export function startMasonry(selector: string, payload: MasonryOptions = {}) {
//   return fetchMasonry().then((Masonry) => {
//     console.log('++', document.querySelectorAll(selector))
//     return new Masonry(selector, payload)
//   })
// }

export function masonryLoayout(selector: string, payload: MasonryOptions = {}) {
  return new Masonry(selector, payload)
}
