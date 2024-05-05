import React from 'react'
import { useScroll } from '../hooks/useScroll'

export default function useScrollPage() {
  const { y } = useScroll()
  return (
    <div
      style={{
        height: '200vh',
      }}
    >
      <h1 style={{ color: y > 100 ? 'red' : 'blue', marginTop: '300px' }}>
        Hello
      </h1>
    </div>
  )
}
