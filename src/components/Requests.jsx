import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequests } from '../utils/requestSlice';
import {BASE_URL} from "../utils/constants"

const Requests = () => {

const dispatch = useDispatch();
// Getting the requests received from frontend store
const requests = useSelector((store) => store.request);

 const reviewrequest =  async (status,_id) => {
   try{
    const res = await axios.post(
      BASE_URL + "/request/review/" + status + "/" +_id,
      {},
      {withCredentials: true},
     );
      //  After you accept or reject a request,(backend is updated), also update in store by removing the particular request
      dispatch(removeRequests(_id));
   } catch(err){
    console.log(err);
   }    

 }


const fetchRequests = async() => {
   const res  = await axios.get(
      BASE_URL + "/user/requests/received" , {
        withCredentials: true,
      }
   );
  //  console.log(res);
  //  Keep the requests details that came from backend in the store.
  dispatch(addRequests(res.data.data));
};

useEffect(() => {
   fetchRequests();
},[]);

if(!requests) return;

if(requests.length === 0){
  return <h1> No requests Found</h1>
}

  return (
    <div>
  <h1> Connection Requests</h1>

  { requests.map ((request) => {
    const {_id, firstName,lastName, photoUrl, age, gender, about} = request.fromUserId;
      
      return(
         <div key = {_id} className=''>
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
          {/* the two buttons with which you can accept or reject a particular request */}
          <div>
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewrequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewrequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>

         </div>
      );

  })
  }


    </div>
  )
}

export default Requests