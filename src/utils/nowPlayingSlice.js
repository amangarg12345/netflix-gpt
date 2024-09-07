import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name : 'nowplayingmovies',
    initialState : {
        nowPlaying : {},
    },
    reducers : {
        addNowPlayingMoives : (state,action) =>{
            state.nowPlaying = action.payload;
        }
    }
});
export const {addNowPlayingMoives} = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;