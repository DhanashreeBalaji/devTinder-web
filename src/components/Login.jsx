import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants'


const Login = () => {

  const [emailId, setEmailId] =  useState("");
  const [password,setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isloginForm, setLoginForm] = useState(true);
  const [error, setError] = useState("");
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
         
        //   Adding the details of the loggingIn user to the store which came from backend API Call, and redirect to main page
         dispatch(addUser(res.data));
         return navigate("/");

    } catch(err){
      setError(err?.response?.data || err?.message || "Something went wrong");
    }
  };

  const handleSignUp = async() => {
    try{
         const res = await axios.post(
            BASE_URL + "/signup",   
            {firstName,lastName,emailId,password},
            {withCredentials:true}   
         );
        //  lOGGING IN THE USER WHILE HE SIGNS UP
         dispatch(adduser(res.data.data))
         navigate("/")
    } catch(err){
      setError(err?.response?.data || "Something went wrong");
    }
  }

  return (
    <div className='flex justify-center my-10'>
       <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title mx-auto">
      {isloginForm ? "Login" : "SignUp"}
    </h2>
   <div>

   {  !isloginForm && 
   ( <>
    <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">FirstName</span>
  </div>
   <input type="text" 
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
    value = {firstName}
    onChange={(e) => setFirstName(e.target.value)}
   />
     </label>

   <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">LastName</span>
  </div>
   <input type="text" 
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
    value = {lastName}
    onChange={(e) => setLastName(e.target.value)}
   />
     </label>
     </>)
     }

   <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Email Id</span>
  </div>
   <input type="text" 
   placeholder="Type here" 
   className="input input-bordered w-full max-w-xs" 
    value = {emailId}
    // Binding state variable to UI component
    onChange={(e) => setEmailId(e.target.value)}
   />
   </label>

  <label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
   <input type="password" 
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
      onClick={() => isloginForm ? handleLogin() : handleSignUp()}
    > 
       {isloginForm ? "Login" : "SignUp"}
      </button>
    </div>

  {/* Toggle Functionality */}
  <p className='m-auto cursor-pointer py-2' onClick={() => setLoginForm((value) => !value)} >
  
{
  isloginForm ? "New User? SignUp Here" : "Existing user? Login Here"
}
  </p>

  </div>
</div>
    </div>
    
  )
}

export default Login