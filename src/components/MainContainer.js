import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';

const MainContainer = () => {
    useNowPlayingMovies();
  return (
    <div>
      <h1>Video Trailer</h1>
    </div>
  )
}

export default MainContainer
