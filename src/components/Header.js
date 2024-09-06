import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import auth from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email} = user;
          dispatch(addUser({
            uid : uid,
            email : email,
          }));
          navigate('/Browse');
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser(null));
          navigate('/SignIn');
        }
      });
      return () => unsubscribe();
},[])
  return (
    <div>
      <img className='absolute w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
        alt = 'Logo'/>
    </div>
  )
}

export default Header
