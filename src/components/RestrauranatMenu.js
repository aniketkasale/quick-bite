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
    <div>
      <div className="items-center flex p-8 justify-around bg-orange-400 rounded-xl m-8">
        <div>
          <img
            className="rounded-3xl h-40"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="space-y-1">
          <h1 className="font-bold text-4xl">{restaurant?.name}</h1>
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
          <p className="flex items-center">
            <AiFillStar className="mr-1" /> {restaurant?.avgRating}
          </p>
          <p>{restaurant?.costForTwoMsg}</p>
          <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
        </div>
      </div>
      <div className="h-full w-auto flex flex-wrap justify-center">
        {Object.values(restaurant?.menu?.items).map((item) => {
          return <ItemCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
export default RestrauranatMenu;
