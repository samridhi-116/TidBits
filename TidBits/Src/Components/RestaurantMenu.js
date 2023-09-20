import { useParams } from "react-router-dom";
import { imgCDN} from "../config";
import rating from "../Assets/rating.png";
import veg from "../Assets/veg.png";
import nonVeg from "../Assets/non-veg.png";
import {Shimmer2} from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const dispatch = useDispatch();
    const addFood = ({ item, restaurantInfo }) =>{
        dispatch(addItem({ item, restaurantInfo }))
    }   
    const { restaurantInfo, myRestaurantMenu } = useRestaurantMenu(resId);
    // console.log(params);
    // const {resId} = useParams();
    return(!myRestaurantMenu)? <Shimmer2/> :(
        <div className=" w-3/4 mx-auto my-8">
            <div className="flex flex-row justify-between items-center">
                <div>
                    <p className="font-sans font-semibold text-lg leading-relaxed text-gray-900">{restaurantInfo?.name}</p>
                    <p className="font-sans font-normal text-sm text-gray-400">{restaurantInfo?.cuisines?.join(", ")}</p>
                    <p className="font-sans font-normal text-sm text-gray-400">{restaurantInfo?.areaName}, {restaurantInfo?.sla?.lastMileTravelString}</p>
                    <br/>
                    <p className="font-sans font-medium text-sm text-gray-700">{restaurantInfo?.sla?.slaString} • {restaurantInfo?.costForTwoMessage}</p>
                </div>
                <div className=" w-[8%] border-solid border border-gray-400 rounded-lg p-2 h-[0%]">
                    <div className="flex flex-row justify-center items-center">
                        <img alt="rating" src={rating} className=" w-5 h-5"/>
                        <p className="font-sans font-medium text-sm text-gray-500 ml-1">{restaurantInfo?.avgRating}</p>
                    </div>
                    <hr className=" my-2"/>
                    <p className="font-sans font-medium text-[10px] leading-relaxed text-gray-700 text-center">{restaurantInfo?.totalRatingsString}</p>
                </div>   
            </div>
            <hr className=" my-12 bg-gray-300 h-[1.2px]"/>
            <div className="Restaurant-Menu">
                <p className="my-4 font-sans text-[1.2rem] font-bold">{myRestaurantMenu?.title}</p>
                <br/>
                <div data-testid="menu">
                    {(myRestaurantMenu?.itemCards)?.map((item) => (
                        <>
                        <div key={item?.card?.info?.id} 
                        className="flex flex-row justify-between items-center">
                            <div className=" w-2/3">
                                <div>
                                    {item?.card?.info?.isVeg == 1 ? 
                                    <img src={veg} alt="Veg"
                                    className=" w-4 h-4 mb-2"/> : 
                                    <img src={nonVeg} alt="Non-Veg" 
                                    className=" w-4 h-4 mb-2"/>}
                                </div>
                                <div className="font-sans font-semibold text-base leading-relaxed text-gray-900">
                                    {item?.card?.info?.name}
                                </div>
                                <div className="font-sans font-semibold text-sm leading-relaxed text-gray-600">
                                    ₹{Math.floor(item?.card?.info?.price / 100)}
                                </div>
                                <br/>
                                <div className="font-sans font-regular text-xs leading-relaxed text-gray-500">
                                    {item?.card?.info?.description}
                                </div>
                            </div>
                            <div className="mr-[0] flex flex-col items-center">
                                <img src={imgCDN+item?.card?.info?.imageId} 
                                className=" w-[100px] h-[100px] rounded-lg object-cover"/>
                                <button 
                                data-testid="add-btn"
                                onClick={()=>addFood({ item: item.card.info, restaurantInfo })}
                                className="border-solid border-[1.5px] border-amber-600 rounded-lg font-sans text-sm py-1 px-2 text-amber-600 text-center mt-[-10px] bg-white">
                                Add +
                                </button>
                            </div>
                        </div>
                        <hr className=" my-8"/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;