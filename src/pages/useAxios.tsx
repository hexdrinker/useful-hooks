import useAxios from '../hooks/useAxios'

export default function useAxiosPage() {
  const { loading, data, error, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  })
  console.log(`Loading: ${loading}`)
  console.log(`Data: ${JSON.stringify(data)}`)
  console.log(`Error: ${error}`)
  return (
    <div>
      <div>Hello</div>
      <div>{data && data.status}</div>
      <div>{loading && 'Loading...'}</div>
      <button onClick={refetch}>refetch</button>
    </div>
  )
}
