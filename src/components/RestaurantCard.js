import { AiFillStar } from "react-icons/ai";
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurandImg" />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <span>
        <AiFillStar className="star" /> {avgRating} starts
      </span>
    </div>
  );
};

export default RestaurantCard;
