import { useFullscreen } from '../hooks/useFullscreen'

export default function useFullscreenPage() {
  const onFullScreen = (isFull: boolean) => {
    console.log(isFull ? 'We are full' : 'We are small')
  }
  const { element, triggerFullscreen, exitFull } = useFullscreen(onFullScreen)
  return (
    <div>
      <div ref={element}>
        <img
          src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjhfNjQg%2FMDAxNjE5NjAyMzA4ODQ2.5WVn8LcpGWExbYyqy1KRm3EJXuMaKakFliSZB-6mw7cg.UvtrFG2P-A_S2FhJ1-okATkp1vYcZ8nKnDraJBebwZEg.JPEG.lotustus88%2FIMG_3113.JPG&type=sc960_832'
          alt='쥬피썬더'
        />
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFullscreen}>fullscreen</button>
    </div>
  )
}
