import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants'


const Login = () => {

  const [emailId, setEmailId] =  useState("viratkholi@gmail.com");
  const [password,setPassword] = useState("viraT@123");
  const[error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // To make an api call we will use an npm package known as axios
    try{
         const res = await axios.post(
          BASE_URL + "/login",
          {
            emailId,
            password,
          },
          {withCredentials: true}
          // withCrendentials has to passed from frontend when you use axios, only then token is send back to BE for other api calls 
         );
         console.log(res);
        //   Adding the details of the loggingIn user to the store which came from backend API Call, and redirect to main page
         dispatch(adduser(res.data));
         return navigate("/");

    } catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.error (err.message);
    }
  };

  return (
    <div className='flex justify-center my-10'>
       <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title mx-auto">Login</h2>
   <div>
   <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
   <input type="text" 
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
    value = {emailId}
    // Binding state variable to Ui component
    onChange={(e) => setEmailId(e.target.value)}
   />
  
</label>
   <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
   <input type="text" 
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
    value = {password}
    onChange={(e) => setPassword(e.target.value)}
   />
  
</label>
   </div>
   <p className='text-red-500 text-bold' > {error} </p>
    <div className="card-actions justify-center">
      <button className="btn btn-secondary"
      onClick={() => handleLogin()}
      >Login</button>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Login