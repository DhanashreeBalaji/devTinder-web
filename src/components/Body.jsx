import NavBar from "./NavBar"
import { Outlet, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import { adduser } from "../utils/userSlice"
import axios from "axios"


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user); 

   const fetchUser =  async () => {
    // If data is there with the frontend i.e., store, then dont make backend call 
      if(userData) return;

      try{
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });
        dispatch(adduser(res.data));
      } catch(err){
        if(err.status === 401)
         {
            navigate("/login");
         }       
          else{
          console.log(err);
          // navigate("/error")
          }
      }

  }

  //  This useEffect will be called when the Body componenet loads for the first time,
  //  i.e., when the website loads or when you refresh the website the components loads fully, so fetchUser() is called, which checks if user store has data or not.
useEffect(() => {
  fetchUser();
},[])

  return (
 <div>
  <NavBar/>
  <Outlet/>
  <Footer/>
 </div> 
  )
}

export default Body