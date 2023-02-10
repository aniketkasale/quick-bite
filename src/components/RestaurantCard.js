import { AiFillStar } from "react-icons/ai";
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="border-2 space-y-2 hover:shadow-xl w-56 rounded-md p-3 m-5 cursor-pointer">
      <img
        className="w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurandImg"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <span className="bg-orange-200 w-fit p-1 text-sm font-semibold rounded-lg flex items-center">
        <AiFillStar className="star mr-1" /> {avgRating} starts
      </span>
    </div>
  );
};

export default RestaurantCard;
