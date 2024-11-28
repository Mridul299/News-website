import { useContext } from "react";
import Header from "../Components/Header";
import RightNavbar from "../Components/RightNavbar/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";
import { FaBackward } from "react-icons/fa6";

const Newsdetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 pt-3 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon News</h2>
          <div className="card bg-base-100 w-full border px-7 py-7 mt-4 ">
            <figure className="w-full">
              <img src={news.image_url} alt="Shoes" className="w-full mx-7" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.details}</p>
              <div className="card-actions justify-start mt-5">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-error"
                >
                  <FaBackward></FaBackward>
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNavbar></RightNavbar>
        </section>
      </main>
    </div>
  );
};

export default Newsdetails;
