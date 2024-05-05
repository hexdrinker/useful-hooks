export const usePreventLeave = () => {
  const listener = (event: Event) => {
    event.preventDefault()
  }
  const enablePrevent = () => {
    window.addEventListener('beforeunload', listener)
  }
  const disablePrevent = () => {
    window.removeEventListener('beforeunload', listener)
  }
  return { enablePrevent, disablePrevent }
}
