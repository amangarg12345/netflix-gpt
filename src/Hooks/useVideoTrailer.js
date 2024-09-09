import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/nowPlayingSlice";

const useVideoTrailer = (id) => {
    const dispatch = useDispatch();
  const getVideoTrailer = async() =>{
    const data = await fetch ('https://api.themoviedb.org/3/movie/'+365177+'/videos?language=en-US',API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter((video)=>video.name === "Final Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(()=>{getVideoTrailer();},[]);
}

export default useVideoTrailer
