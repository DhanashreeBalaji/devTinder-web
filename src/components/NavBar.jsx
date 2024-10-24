import { useSelector } from "react-redux";

const NavBar = () => {

//  If the user is logged in, show the photo of the user, for that subscribe to the store
const user = useSelector((store) => store.user);
console.log("Subscribed" + user);

  return (
    <>
        <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"> 👩🏻‍💻 Dev Tinder</a>
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
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      )}
 
  </div>
</div>
      
    </>
  )
}

export default NavBar;