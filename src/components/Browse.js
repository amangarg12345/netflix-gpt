import { signOut } from "firebase/auth";
import Header from "./Header"
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
    const navigate = useNavigate();
    const toggleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div>
      <Header/>
      <button className="absolute right-6 top-6 bg-red-600 text-white px-2 py-2" onClick={toggleSignOut}>Sign out</button>
    </div>
  )
}

export default Browse
