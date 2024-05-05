import { useClick } from '../hooks/useClick'

export default function useClickPage() {
  const sayHello = () => {
    console.log('say hello')
  }
  const title = useClick(sayHello)
  return (
    <div>
      <h1 ref={title}>Hello</h1>
    </div>
  )
}
