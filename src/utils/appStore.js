import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import nowPlayingReducer from './nowPlayingSlice'

const appStore = configureStore({
    reducer : {
        user : userReducer,
        nowPlayingMovies : nowPlayingReducer,
    },
});

export default appStore
