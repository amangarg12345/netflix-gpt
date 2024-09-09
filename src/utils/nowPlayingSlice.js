import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name : 'nowplayingmovies',
    initialState : {
        nowPlaying : null,
        trailerVideo : null,
    },
    reducers : {
        addNowPlayingMoives : (state,action) =>{
            state.nowPlaying = action.payload;
        },
        addTrailerVideo : (state,action) =>{
            state.trailerVideo = action.payload;
        },
    }
});
export const {addNowPlayingMoives, addTrailerVideo} = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;