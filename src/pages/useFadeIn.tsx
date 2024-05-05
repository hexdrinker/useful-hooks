import { useFadeIn } from '../hooks/useFadenIn'

export default function useFadeInPage() {
  const fadeIn = useFadeIn(3, 5)
  return (
    <div>
      <h1 {...fadeIn}>Hello</h1>
    </div>
  )
}
