import { usePreventLeave } from '../hooks/usePreventLeave'

export default function usePreventLeavePage() {
  const { enablePrevent, disablePrevent } = usePreventLeave()

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  )
}
