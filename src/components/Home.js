import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
  return (
    <div>
        <div className='absolute'><img src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg' 
        alt='background image'/></div>
        <Header/>
        <div className='absolute right-6 top-4 px-3 py-1 bg-red-600 bg-opacity-90 text-white'><Link to="/SignIn"><button>SignIn</button></Link></div>
        <div className='absolute top-60 px-4 py-2 left-48 text-center '><p className='text-7xl  text-red-600  bg-black bg-opacity-20'>WELCOME TO AMAN NETFLIX</p>
        <Link to="/SignIn"><button className='m-5 px-7 py-2 bg-red-600 bg-opacity-90 text-2xl text-white'>SignIn</button></Link></div>
    </div>
    
  )
}

export default Home
