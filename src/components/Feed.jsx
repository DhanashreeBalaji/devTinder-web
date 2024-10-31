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

  if (!feed) return;
  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10"> No new users founds! </h1> ;

  return (
    feed && (
        <div className = "flex justify-enter my-10" >
           <UserCard user= {feed[0]} />
        </div>
   ) 
  );
}

export default Feed