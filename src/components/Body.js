import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import NoDataFound from "./NoDataFound";
import { Link } from "react-router-dom";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState(null);
  const [fileredData, setFileredData] = useState(restaurantData);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.646103&lng=73.750789&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
      setFileredData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      if (error.toString().includes("Failed to fetch")) {
        alert(
          "We are using swiggy API for practice and educational purpose, So please install Allow CORS extension and turn it on."
        );
      }
    }
  }

  const filerData = (searchText) => {
    const data = restaurantData.filter((restaurant) =>
      restaurant.data.name.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    return data;
  };

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
            const data = filerData(e.target.value);
            setFileredData(data);
          }}
        />
      </div>
      <div className="app-body">
        {fileredData.length > 0 ? (
          fileredData?.map((restaurant) => {
            return (
              <Link to={'/restaurant/'+ restaurant.data.id}>
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
