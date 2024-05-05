import { useEffect, useRef } from 'react'

export const useClick = (onClick: () => void) => {
  const element = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick)
    }
    return () => element.current?.removeEventListener('click', onClick)
  }, [])
  return element
}
