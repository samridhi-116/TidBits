import { useState, useEffect } from 'react';
import { filterData } from "../utils/Helper"; 

function useRestaurantData(restaurantsInfo) {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(restaurantsInfo);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOffers(json?.data.cards[0]?.card?.card?.imageGridCards?.info);
  }

  const filterRestaurants = (input) => {
    const data = filterData(input, allRestaurants);
    setFilteredRestaurants(data);
  };

  return {
    allRestaurants,
    filteredRestaurants,
    offers,
    searchInput,
    setSearchInput,
    filterRestaurants,
  };
}

export default useRestaurantData;
