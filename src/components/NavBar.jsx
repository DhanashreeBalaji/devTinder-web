import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { removeFeed } from "../utils/feedSlice";

const NavBar = () => {

//  If the user is logged in, show the photo of the user, for that subscribe to the store user.
const user = useSelector((store) => store.user);
console.log("Subscribed" + user);

const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogout = async() => {
  try{
    const res = await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
    dispatch(removeUser());
    dispatch(removeFeed());
    return navigate("/login");
  } catch(err){
  //  Error logic redirect to error page
  }

}

  return (
    <>
        <div className="navbar bg-base-200">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl"> 👩🏻‍💻 Dev Tinder</Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
  
    </div>
    {user && (
      <div className="dropdown dropdown-end mx-5 flex ">
      <p className="px-4 ">Welcome, {user.firstName} </p>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src= {user.photoUrl} />
        </div>
      </div>
      <ul 
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-10 w-52 p-2 shadow">
        <li>
          <Link to = "/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to = "/connections">Connections</Link></li>
        <li><Link to = "/requests" >  Requests </Link></li>
        <li>
        <Link
        onClick={() => handleLogout()}>
             Logout
        </Link>
        </li>
      </ul>
    </div>
      )}
 
  </div>
</div>
      
    </>
  )
}

export default NavBar;