import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {

 const dispatch = useDispatch();
 const connections = useSelector((store) => store.connection)

 const fetchConnections = async() => {
    try{
     const res = await axios.get(
     BASE_URL + "/user/connections", 
     { withCredentials: true } 
   );
    // console.log(res);
      dispatch(addConnections(res.data.data));

    } catch(err){
        console.error (err.message);
    }
 };

 useEffect(() => {
 fetchConnections();
 },[])

  if(!connections){
    return;
  }

  if(connections.length === 0) return <h1>You have no connections</h1>

return (
    <div className=''>
        <h1> Connections</h1>

         {/* Put map on "connections" list and so for each connection extarct the user details and display inside return */}

        { connections.map((connection) => {
            const {_id, firstName, lastName, photoUrl, age, gender, about} = connection;

            return(
                    <div key = {_id}  className= " " >
         <div>
            <img
                alt="photo"
                className='w-20'
                src={photoUrl}
            />
         </div>

          <div className=''>
           <h2> {firstName + " " + lastName} </h2>
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