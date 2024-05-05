import { useTitle } from '../hooks/useTitle'

export default function useTitlePage() {
  const titleUpdater = useTitle('Loading...')
  setTimeout(() => titleUpdater('Home'), 5000)
  return <div>useTitle</div>
}
