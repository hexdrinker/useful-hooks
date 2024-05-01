import { useInput } from '../hooks/useInput'

export default function useInputPage() {
  const maxLength = (value: string) => value.length < 10
  const name = useInput('Mr. ', maxLength)

  return (
    <div>
      <input
        placeholder='Name'
        {...name}
      />
    </div>
  )
}
