import { useNotification } from '../hooks/useNotification'

export default function useNotificationPage() {
  const triggerNotification = useNotification('공부 열심히 해라')

  return (
    <div>
      <button onClick={triggerNotification}>noti</button>
    </div>
  )
}
