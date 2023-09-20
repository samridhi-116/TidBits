import { imgCDN } from "../config";
// import rating from "../Assets/rating.png";

const CartItems = ({item, restaurantInfo}) => {
    // here the props is parameters. revieving agruments from functional components. 
    return (
        <div>
            <img src={ imgCDN+ item.imageId } className=" w-[120px] h-[120px] rounded-2xl object-cover"/>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full font-sans font-medium text-md mt-3 ml-2 leading-relaxed text-gray-700">{restaurantInfo?.name}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full font-sans font-medium text-md mt-3 ml-2 leading-relaxed text-gray-700">{restaurantInfo?.areaName}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full font-sans font-medium text-md mt-3 ml-2 leading-relaxed text-gray-700">{item.name}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-1/2  ml-2 font-sans font-normal text-sm text-gray-400">{item.description}</p>
            <p className="w-full  ml-2 font-sans font-normal text-sm text-gray-400">₹{item.price / 100}</p>
        </div>
    )
};
export default CartItems;