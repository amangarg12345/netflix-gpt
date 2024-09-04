import React from 'react'
import SignIn from './SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';

const Body = () => {
    const AppRouter = createBrowserRouter([
        {
           path : "/",
           element : <Home/>
        },
        {
            path : "/signIn",
            element : <SignIn/>
         }
    ]);
  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  )
}

export default Body;
