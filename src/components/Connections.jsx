import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'
import { useNavigate } from 'react-router-dom'

const Connections = () => {

 const dispatch = useDispatch();
 const connections = useSelector((store) => store.connection);
 const navigate = useNavigate();

 const fetchConnections = async() => {
    try{
     const res = await axios.get(
     BASE_URL + "/user/connections", 
     { withCredentials: true },
   );
      dispatch(addConnections(res.data.data));

    } catch(err){
        console.error (err.message);
        navigate("/error");
       
    }
 };

 useEffect(() => {
 fetchConnections();
 },[])

  if(!connections){
    return;
  }

  if(connections.length === 0) return <h1 className="text-bold text-center my-20 text-pink-500 text-3xl">You have no connections</h1>;

return (
    <div className='text-center my-10'>
        <h1 className='text-bold text-white text-3xl'> Connections</h1>

         {/* Put map on "connections" list and so for each connection extarct the user details and display inside return */}

        { connections.map((connection) => {
            const {_id, firstName, lastName, photoUrl, age, gender, about} = connection;
            return(
             <div key = {_id}  
        className= "flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto" >
         <div>
            <img
                alt="photo"
                className='w-20 h-20 rounded-full object-cover'
                src={photoUrl}
            />
         </div>

          <div className='text-left mx-4  text-pink-500'>
           <h2 className='font-bold text-xl'>
            {firstName + " " + lastName} </h2>
           {
              age && gender && <p> {age + " , " + gender} </p>
           }
           <p>{about}</p>
          </div>

            </div>
            );
        })
 
        }
    </div>
  );
};

export default Connections;