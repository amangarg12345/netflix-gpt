import React, { useState } from 'react'
import Header from './Header'

const SignIn = () => {
  return (
    <div>
        <Header/>
        <form className='bg-black absolute p-16 w-1/3 h-auto my-36 mx-auto left-0 right-0 text-white bg-opacity-70'>
        <h1 className='font-bold text-3xl my-3'>Sign In</h1>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='text' placeholder='Email or Mobile Number'/>
        <input className="bg-gray-950 w-full py-3 px-2 my-2 bg-opacity-85" type='password' placeholder='Password'/>
        <button className='w-full bg-red-600 px-2 py-3 my-2'>Sign In</button>
        <button className='my-4 px-2'>New to Netflix? Sign Up Now</button>
        </form>
    </div>
  )
}

export default SignIn
