import { useDispatch } from "react-redux";
import { addNowPlayingMoives } from "../utils/nowPlayingSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const  getNowPlayingVideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS);
        const json = await data.json();
       // console.log(json.results);
        dispatch(addNowPlayingMoives(json.results));
    }
    useEffect(()=>{
        getNowPlayingVideos();
    },[])
}
export default useNowPlayingMovies;
    