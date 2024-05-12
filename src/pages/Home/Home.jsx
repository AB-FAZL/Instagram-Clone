import React from "react";
import LargeNav from "../Header/largeNav";
import { Link } from "react-router-dom";
import MobileNav from "../Header/MobileNav"
const Home = () => {
  return (
    <>
      <div className="w-full h-auto item-start justify-between lg:gap-x-32 md:gap-x-16 sm-gap-x-8 gap-x-4">
        <div className=" lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500   sticky top-0 lg:block md:block sm:hidden  hidden">
          <LargeNav />
              </div>
              <div className="w-full h-auto py-1 px-3 border-t-[#1d1d1d] border-t fixed bottom-0 left-0 lg:hidden  md:hidden sm:block z-50">
                  <MobileNav/>
            </div>
      </div>
    </>
  );
};

export default Home;