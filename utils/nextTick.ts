export function nextTick(cb: () => void) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
      cb()
    }, 0)
  })
}
