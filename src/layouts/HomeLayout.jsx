import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import Navbar from "../Components/Navbar";
import RightNavbar from "../Components/RightNavbar/RightNavbar";

const HomeLayout = () => {
  return (
    <div className="font-poopins">
      <header>
        <Header></Header>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
