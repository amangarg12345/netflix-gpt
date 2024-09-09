import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name : 'nowplayingmovies',
    initialState : {
        nowPlaying : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
    },
    reducers : {
        addNowPlayingMoives : (state,action) =>{
            state.nowPlaying = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action) =>{
            state.topRatedMovies = action.payload;
        },
    }
});
export const {addNowPlayingMoives, addTrailerVideo, addPopularMovies,addTopRatedMovies} = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;