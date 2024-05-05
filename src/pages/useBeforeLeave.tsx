import { useBeforeLeave } from '../hooks/useBeforeLeave'

export default function useBeforeLeavePage() {
  const begForLife = () => {
    console.log("plz don't leave")
  }
  useBeforeLeave(begForLife)
  return <div>useBeforeLeavePage</div>
}
