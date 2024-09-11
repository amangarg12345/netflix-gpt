import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'

const SecondContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  const movies = useSelector(store => store?.nowPlayingMovies);
  console.log(movies);
  
  return (
    <div className='bg-black'>
      <div className='relative -mt-36  pl-12 z-20'>
         <MovieList title = "Now Playing" movies = {movies?.nowPlaying} />
         <MovieList title = "Top Rated" movies = {movies?.topRatedMovies} />
         <MovieList title = "Most Popular" movies = {movies?.popularMovies} />
         <MovieList title = "Now Playing" movies = {movies?.nowPlaying} />
      </div>
    </div>
  )
}

export default SecondContainer
