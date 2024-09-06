import SignIn from './SignIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';

const Body = () => {
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

  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  )
}

export default Body;
