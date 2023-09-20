import React from "react";
import { ShimmerSimpleGallery, ShimmerCategoryList } from "react-shimmer-effects-18";

// class Example extends Component

export const Shimmer=()=>{
    return (
      <div data-testid="shimmer-body" className="w-full">
        <div className=" w-[75%] mx-auto mt-8">  
          <ShimmerSimpleGallery card imageHeight={200} caption col={4} row={2} gap={20} />
        </div>
      </div>
    )
}

export const Shimmer2 = () => {
  return (
    <div data-testid="shimmer-menu">
      <div className=" w-[75%] mx-auto mt-8">
        <ShimmerCategoryList title items={6} categoryStyle="STYLE_FOUR" />
      </div>
    </div>
    
  )
}

// export default Shimmer;