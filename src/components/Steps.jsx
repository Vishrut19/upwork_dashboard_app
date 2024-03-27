import Image from "next/image";
import React from "react";
import rightArrow from "../../public/assets/down_arrow.svg";

const Steps = () => {
  return (
    /** This can also be seperated into small, small components and also there can be logic and interactivity added
     * but right now, its not as we will need some API data for it.
     */
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center mt-4">
      <div className="flex items-center">
        <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-[#0068FF] text-white text-sm font-bold">
          1
        </div>
        <span className="font-bold font-manrope text-[#000000]">
          Learning Path Overview
        </span>
        <span className="my-4 md:my-0 md:mx-4 lg:mx-8">
          <Image src={rightArrow} alt="Right Arrow" />
        </span>
      </div>
      <div className="flex items-center">
        <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-[#C5C5C5] text-white text-sm font-bold">
          2
        </div>
        <span className="font-bold font-manrope text-[#000000]">
          Learning Path Structure
        </span>
        <span className="my-4 md:my-0 md:mx-4 lg:mx-8">
          <Image src={rightArrow} alt="Right Arrow" />
        </span>
      </div>
      <div className="flex items-center">
        <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-[#C5C5C5] text-white text-sm font-bold">
          3
        </div>
        <span className="font-bold font-manrope text-[#000000]">Publish</span>
      </div>
    </div>
  );
};

export default Steps;
