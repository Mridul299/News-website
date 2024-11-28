import { Link, NavLink } from "react-router-dom";
import usericon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav gap-4 flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div className="login flex gap-2 items-center">
        <div className="rounded-full">
          <img className="rounded-full" src={usericon} alt="" />
        </div>
        {user && user?.email ? (
          <button onClick={signout} className="btn btn-neutral">
            SignOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
