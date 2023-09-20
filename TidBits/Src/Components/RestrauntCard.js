import { imgCDN } from "../config";
import rating from "../Assets/rating.png";

const RestrauntCard = ({name, cuisines, avgRating, cloudinaryImageId, areaName}) => {
    // here the props is parameters. revieving agruments from functional components. 
    return (
        <>
            <img src={imgCDN+cloudinaryImageId} className=" w-full h-[120px] rounded-2xl object-cover"/>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full font-sans font-medium text-md mt-3 ml-2 leading-relaxed text-gray-700">{name}</p>
            <div className=" flex flex-row ml-2 my-2 items-center">
                <img alt="rating" src={rating} className=" w-5 h-5"/>
                <p className=" ml-[5px] font-sans font-regular text-sm text-gray-500">{avgRating}</p>
            </div>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full  ml-2 font-sans font-normal text-sm text-gray-400">{cuisines.slice(0, 3).join(", ")}</p>
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-full  ml-2 font-sans font-normal text-sm text-gray-400">{areaName}</p>
        </>
    )
};

export default RestrauntCard;