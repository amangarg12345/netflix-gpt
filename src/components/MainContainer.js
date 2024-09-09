import { useSelector } from 'react-redux';
import MainVideoTitle from './MainVideoTitle';
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainVideoTrailer from './MainVideoTrailer';

const MainContainer = () => {
    useNowPlayingMovies();
    const movies = useSelector((store)=> store.nowPlayingMovies?.nowPlaying);
    if(!movies) return;
    const mainMovies = movies[0];
    const {original_title,overview,id} = mainMovies;
    
  return (
    <div>
      <MainVideoTitle title = {original_title} overview = {overview}/>
      <MainVideoTrailer id = {id}/>
    </div>
  )
}

export default MainContainer
