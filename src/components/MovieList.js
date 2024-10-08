import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    
  return (
    <div className="px-6">
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-auto'>
        {movies &&
            movies?.map(movie => <MovieCard key = {movie?.id} poster = {movie?.poster_path}/>)
        }
      </div>
    </div>
  )
}

export default MovieList
