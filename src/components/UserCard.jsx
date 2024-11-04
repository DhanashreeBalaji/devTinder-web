import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
    const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const handleSendRequest = async(status) => {
       try{
            const res = await axios.post(
              BASE_URL+ "/request/send/" + status + "/" + user._id,
              {},
              {withCredentials:true},
            );
            dispatch(removeUserFromFeed(user._id));

       } catch(err){
           navigate("/error");
           console.error (err.message);
       }
     };


    return (
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + ", " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary" onClick={() => handleSendRequest("ignored")}>Ignore</button>
            <button className="btn btn-secondary" onClick={() => handleSendRequest("interested")}> Interested</button>
          </div>
        </div>
      </div>
    );
  };
  export default UserCard;