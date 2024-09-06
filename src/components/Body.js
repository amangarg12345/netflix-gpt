import React, { useEffect } from 'react'
import SignIn from './SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const AppRouter = createBrowserRouter([
        {
           path : "/",
           element : <Home/>
        },
        {
            path : "/signIn",
            element : <SignIn/>
         },
         {
            path : "/Browse",
            element : <Browse/>
         }
    ]);

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email} = user;
              dispatch(addUser({
                uid : uid,
                email : email,
              }));
              
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser(null));
            }
          });
    },[])
  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  )
}

export default Body;
