import moment from "moment";
import logo from "../assets/logo.png";
import LatestNews from "./LatestNews";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo mt-5">
        <img className="w-[471px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      <section className="w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
    
    </div>
  );
};

export default Header;
