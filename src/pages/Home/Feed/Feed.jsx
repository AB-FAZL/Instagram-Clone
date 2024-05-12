import React from "react";
import TopNav from "../TopNav";
import Stories from "../Stories/Stories";
import FeedCard from "./FeedCard/FeedCard";

const Feed = () => {
  return (
    <>
      <div className="lg:w-[83%] md-[83%] sm:h-full w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px-3 items-start gap-x-20 ">
        <div className="lg:w-[70%] md:w-full sm:w-full w-full h-50 relative ">
          <TopNav />
          <Stories />
          <div className=" w-full h-auto flex items-center justifycenter mt-6">
            <div className=" lg:w-[70%] md:w-[73%] sm:w-[80%] w-[80%] h-auto">
              <FeedCard />
            </div>
          </div>
        </div>
        <div className=" w-[25%] h-auto lg:block hidden">

        </div>
      </div>
    </>
  );
};

export default Feed;
