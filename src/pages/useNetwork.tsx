import { useNetwork } from '../hooks/useNetwork'

export default function useNetworkPage() {
  const handleNetworkChange = (online: boolean) => {
    console.log(online ? 'We just went online' : 'We are offline')
  }
  const onLine = useNetwork(handleNetworkChange)
  return <div>{onLine ? 'Online' : 'Offline'}</div>
}
