import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { AiFillStar } from "react-icons/ai";
import ShimmerUI from "./ShimmerUI";
import ItemCard from "./ItemCard";

const RestrauranatMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  console.log(restaurant);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=18.646103&lng=73.750789&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

  if (!restaurant) {
    return <ShimmerUI/>
  }
  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <div>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
        </div>
        <div>
           <h1>{restaurant?.name}</h1>
           <p>{restaurant?.cuisines?.join(", ")}</p>
           <p>{restaurant?.locality +", "+restaurant?.area+", "+restaurant?.city}</p>
        </div>
        <div>
            <p><AiFillStar/> {restaurant?.avgRating}</p>
            <p>{restaurant?.costForTwoMsg}</p>
            <p>{restaurant?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</p>
        </div>
      </div>
      <div className="app-body">
        {Object.values(restaurant?.menu?.items).map((item)=>{
            return <ItemCard {...item} key={item.id}/>
        })}
      </div>
    </div>
  );
};
export default RestrauranatMenu;
