import React from "react";
import { Link } from "react-router-dom";
import storiesData from "./StoriesDara/StoriesData";
import TextEllips from "./StoriesDara/TextEllips";

const Stories = () => {
  return (
    <>
      <div
        className="lg:max-w-[41vw] md:max-w-[70cw] sm:max-w-full max-w-full w-full h-auto flex item-center 
      gap-x-3.5 overflow-x-auto"
      >
        <Link to="/" className="flex items-center justify-center flex-col flex-shrink-0">
          <div className=" w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
            <img src="https://source.unsplash.com/random/?flower" alt="story img" className=" rounded-full w-full h-full object-cover bg-black " />
                  </div>
                  <TextEllips username={"AB-FAZL"}/>
              </Link>
              {storiesData.map((story) => (
                <Link to="/" key={story.id} className="flex items-center justify-center flex-col flex-shrink-0">
                <div className=" w-16 h-16 rounded-full object-cover p-[2px]  bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img src={story.imageUrl} alt="story img" className=" rounded-full w-full h-full object-cover bg-black " />
                </div>
                    </Link>
              
              ))}
      </div>
    </>
  );
};

export default Stories;
