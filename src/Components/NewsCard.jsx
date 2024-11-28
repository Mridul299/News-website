import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsCard = ({ singlenews }) => {
  return (
    <div className="my-3">
      <div className="max-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="flex items-center gap-4 p-4">
          <img
            src={singlenews.author.img}
            alt="Author"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-gray-800 font-semibold">
              {singlenews.author.name}
            </h3>
            <p className="text-gray-500 text-sm">
              {singlenews.author.published_date}
            </p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">
            <i className="fas fa-share"></i>{" "}
            {/* Use Font Awesome or other icons */}
          </button>
        </div>

        {/* Title */}
        <h2 className="px-4 text-lg font-bold text-gray-800 hover:underline cursor-pointer">
          {singlenews.title}
        </h2>

        {/* Image */}
        <div className="mt-4 px-4">
          <img
            src={singlenews.image_url}
            alt="News"
            className="w-full rounded-md"
          />
        </div>

        {/* Description */}
        <div className="px-4 py-2 text-sm text-gray-600">
          <p>{singlenews.details}</p>
          <Link
            to={`/news/${singlenews._id}`}
            className="text-blue-500 hover:underline font-medium"
          >
            Read More
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-4 bg-gray-100">
          {/* Ratings */}
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index}></FaStar> // Replace with stars
                ))}
            </div>
            <span className="text-gray-700 text-sm font-medium">
              {singlenews.rating.number}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center text-gray-600 text-sm">
            <i className="fas fa-eye mr-1"></i>
            <span>{singlenews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
