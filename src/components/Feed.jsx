import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {addFeed} from "../utils/feedSlice";
import {BASE_URL} from "../utils/constants";
import UserCard from "./UserCard";

const Feed = () => {
  
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return;
     
    try{
      const res = await axios.get(BASE_URL+ "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch(err){
      console.log(err?.response?.data);
    }
  };
useEffect(() => {
  getFeed();
}, []);

  return (
    feed &&
   feed.length !== 0 ? (
    <div className = "flex justify-enter my-10">
      <UserCard user= {feed[0]} />
    </div>
   ) : (
    <h1>No feed for you</h1>
   )
   
    
  )
}

export default Feed