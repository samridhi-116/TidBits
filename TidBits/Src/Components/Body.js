import RestrauntCard from "./RestrauntCard";
import React, { useRef  } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import noResult from "../Assets/no-result.jpg";
import { imgCDN, restaurantsInfo } from "../config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useRestaurantData from "../utils/useRestaurants";
import useOnline from "../utils/useOnline";
import { IconContext } from "react-icons";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

const Body = () => {
  const { allRestaurants, filteredRestaurants, offers, searchInput, setSearchInput,filterRestaurants} = useRestaurantData(restaurantsInfo);

    const isOnline = useOnline();

    if(!isOnline){
      return <h1>🔴 Offline, Please check your internet connection</h1>
    }

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };

    const previous = () => {
      sliderRef.current.slickPrev();
    };

    const settings = {
      infinite: true,
      slidesToShow: 2.1,
      slidesToScroll: 1,
      accessibility:false,
      arrows:false,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      adaptiveHeight: true,
      centerPadding: "50px",
      variableWidth: true,
    };

    return (allRestaurants?.length == 0) ? <Shimmer/> : (
      <div className=" w-9/12 mx-auto my-4">
        <div className="flex flex-row my-4 w-1/2 mx-auto">
          <input 
            data-testid = "search-input"
            type="text"
            placeholder="Search Restaraunt"
            className="flex-1 border-solid border border-orange-400 rounded-l-lg font-sans text-base py-2 px-4 text-slate-400"
            value= {searchInput}
            onChange={(e) => {
              //e.target.value => whatever value we input in our text field. 
              // here we are writing search text
              setSearchInput(e.target.value);
            }}
          />
         
          <span>
            <button 
            data-testid = "search-btn"
            className="border-solid border border-orange-400 rounded-r-lg font-sans text-base py-2 px-4 text-white bg-orange-400 text-center"
            onClick={() => filterRestaurants(searchInput)}  
            >Search</button>
          </span>   
        </div>

        <div className="">
            {
              filteredRestaurants?.length === 0 ? (
                <div className=" w-1/2 mx-auto my-8">
                  <img src={noResult} className="w-full object-center object-fill"/>
                  <br/>
                  <h1 className=" font-sans font-semibold text-xl text-center">No Restaurants available for "{searchInput}</h1>
                </div>
              ) : (
                <>
                  <div className=" mt-6 mb-4">
                    <div className="flex flex-row justify-between items-center">
                      <p className=" my-4 font-sans text-[1.4rem] font-bold">Best offers for you</p>
                      <div>
                        <IconContext.Provider value={{ size: "1.5em", color: "#8c8c8c"}}>
                        <button className="button" onClick={previous}>
                          <MdArrowCircleLeft/>
                        </button>
                        <button className="button" onClick={next}>
                          <MdArrowCircleRight/>
                        </button>
                        </IconContext.Provider>
                      </div>
                    </div>
                    <Slider ref={sliderRef} {...settings}>
                        {offers?.map((item) => (
                            <>
                                <img 
                                  src={imgCDN+item.imageId} 
                                  alt={item.alt} 
                                  className=" w-[350px] mr-4 flex flex-row justify-between"
                                />
                            </>
                        ))}
                    </Slider>
                  </div>
                  <br/>
                  <div>
                    <p className=" mb-4 font-sans text-[1.4rem] font-bold">Restaurants near you</p>
                    <div data-testid="res-list" className="flex flex-wrap justify-between">
                      {filteredRestaurants?.map((restraunt) => 
                        (
                          <Link to={"/restaurant/"+restraunt.info.id} key={restraunt.info.id} className=" w-[22.5%] overflow-hidden mb-8">
                            <RestrauntCard {...restraunt.info}/>
                          </Link>            
                        )
                      )}
                    </div> 
                  </div>
                </>
              )
            }
        </div>
      </div>
    )
}

export default Body;