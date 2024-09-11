import React from 'react'
import { IMG_URL_CDN } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div>
      <div className='w-44 pr-3'>
        <img alt='movie poster' src={IMG_URL_CDN + poster }/>
      </div>
    </div>
  )
}

export default MovieCard
