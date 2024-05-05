import { useConfirm } from '../hooks/useConfirm'

export default function useConfirmPage() {
  const deleteWorld = () => console.log('월드 삭제')
  const abort = () => console.log('거절')
  const confirmDelete = useConfirm('진짜 삭제하게?', deleteWorld, abort)
  return (
    <div>
      <button onClick={confirmDelete}>Delete!</button>
    </div>
  )
}
