import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import NoDataFound from "./NoDataFound";
import { Link } from "react-router-dom";
import { filerData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [fileredData, setFileredData] = useState(null);
  const restaurantData = useRestaurants(setFileredData);

  if (!restaurantData) {
    return <ShimmerUI />;
  }

  return (
    <>
      <div className="search-bar">
        <input
          placeholder={"🔍 Search a restaurant you want..."}
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filerData(e.target.value, restaurantData);
            setFileredData(data);
          }}
        />
      </div>
      <div className="app-body">
        {fileredData.length > 0 ? (
          fileredData?.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id}>
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
        ) : (
          <NoDataFound />
        )}
      </div>
    </>
  );
};

export default Body;
