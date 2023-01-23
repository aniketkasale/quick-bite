import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import ShimmerUI from "./ShimmerUI";
import ItemCard from "./ItemCard";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestrauranatMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurantInfo(id);

  if (!restaurant) {
    return <ShimmerUI />;
  }

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <div>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        </div>
        <div>
          <h1>{restaurant?.name}</h1>
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>
            {restaurant?.locality +
              ", " +
              restaurant?.area +
              ", " +
              restaurant?.city}
          </p>
        </div>
        <div>
          <p>
            <AiFillStar /> {restaurant?.avgRating}
          </p>
          <p>{restaurant?.costForTwoMsg}</p>
          <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
        </div>
      </div>
      <div className="app-body">
        {Object.values(restaurant?.menu?.items).map((item) => {
          return <ItemCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default RestrauranatMenu;
