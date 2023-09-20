import { useState,  useEffect } from "react";
import { restarauntAPI } from "../config";

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [myRestaurantMenu, setMyRestaurantMenu] = useState(null);
    //Get Data from API
    useEffect(()=>{
        getRestraunts();
    },[])

    async function getRestraunts(){
        const data = await fetch(restarauntAPI+resId);
        const json = await data.json();
        setRestaurantInfo(json.data?.cards[0]?.card?.card?.info);
        setMyRestaurantMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
    }
    //Return that data
    return { restaurantInfo, myRestaurantMenu };
}
export default useRestaurantMenu;