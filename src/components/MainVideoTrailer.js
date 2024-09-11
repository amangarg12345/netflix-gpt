import React from 'react'
import useVideoTrailer from '../Hooks/useVideoTrailer'
import { useSelector } from 'react-redux';

const MainVideoTrailer = ({id}) => {
  useVideoTrailer(id);
  const trailer = useSelector((store)=>store.nowPlayingMovies?.trailerVideo);
  //console.log(trailer);
  
  return (
    <div className='w-screen'>
      <iframe className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"} 
      title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       ></iframe>
    </div>
  )
}

export default MainVideoTrailer
