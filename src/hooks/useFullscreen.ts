import { useRef } from 'react'

export const useFullscreen = (callback: (isFull: boolean) => void) => {
  const element = useRef<HTMLImageElement>(null)

  const triggerFullscreen = () => {
    if (element.current) {
      element.current.requestFullscreen()
      if (callback && typeof callback === 'function') {
        callback(true)
      }
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
    if (callback && typeof callback === 'function') {
      callback(false)
    }
  }
  return { element, triggerFullscreen, exitFull }
}
