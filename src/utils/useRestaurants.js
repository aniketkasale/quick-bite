import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../config";

function useRestaurants(setFileredData) {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(RESTAURANTS_URL);
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
  return restaurantData;
}

export default useRestaurants;
