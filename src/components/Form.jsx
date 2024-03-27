import React from "react";
import Image from "next/image";
import downArrow from "../../public/assets/chevron.svg";
import thumbnailImage from "../../public/assets/images/image.png";

const Form = () => {
  return (
    /**This form can be either broken down into many components or all the data can be populated from fetching data from API
     * and also form data can be submitted to api using CRUD Operation.
     */
    <div className="flex ml-[72px] w-full">
      <form>
        <h1 className="font-manrope font-semibold text-lg leading-8">
          Learning Path Name
        </h1>
        <input
          type="text"
          placeholder="Develop Your Creative Thinking and Innovation Skills"
          className="mt-3 input input-bordered w-[100%] placeholder-black font-manrope border-[#DBDBDB]"
        />
        <div className="mt-10">
          <h1 className="font-manrope font-semibold text-lg leading-8">
            Learning Path Description
          </h1>
          <textarea
            className="mt-3 overflow-y-auto textarea textarea-bordered  placeholder-black font-manrope w-[100%] h-[190px]"
            placeholder="Learn how to generate innovative solutions in work situations. Review how to develop, design, and create new applications, ideas, relationships, systems, and products. Discover how to use creative and alternative thinking to develop new ideas for and answers to work-related problems."
          />
        </div>
        <div className="mt-10 ml-1 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col">
            <label
              htmlFor="skillsAcquisition"
              className="font-semibold text-lg leading-8 mb-3 font-manrope"
            >
              Skills Acquisition
            </label>
            <input
              id="skillsAcquisition"
              type="text"
              placeholder="Decision Making"
              className="input font-semibold font-manrope input-bordered w-[100%] h-14 px-4 placeholder-black border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="proficiencyLevel"
              className="font-semibold text-lg leading-8 mb-3 font-manrope"
            >
              Proficiency Level
            </label>
            <div className="relative">
              <button
                id="proficiencyLevel"
                type="button"
                class="inline-flex w-[100%] h-14 font-manrope justify-between items-center px-3 py-1 border border-gray-300 text-gray-700 bg-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                Advance
                <Image src={downArrow} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="btn mt-5 text-sm bg-white btn-outline text-[#021D30] border-[#F2F2F2] rounded-lg w-[119px] font-manrope">
            + Add More
          </button>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="font-manrope font-semibold text-lg leading-8">
            Thumbnail
          </h1>
          <Image
            className="w-[732px] h-[240px] mask border rounded-[10px]"
            src={thumbnailImage}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
