import React from "react";
import instagramFeed from "../InstagramFeedData/InstagramFeedData";
import { Link } from "react-router-dom";
import Ellipse from "../../../../Components/Icons/Ellipse/Ellipse";
import Like from "../../../../Components/Icons/Like/Like";
import Save from "../../../../Components/Icons/Save/Save";
import Share from "../../../../Components/Icons/Share/Share";
import Comment from "../../../../Components/Icons/Comment/Comment";

const FeedCard = () => {
  return (
    <>
      {
        instagramFeed.map((feed) => (
        <div key={feed.id} className=" w-full h-auto mb-6">
          <div className="  w-full h-auto flex item-center justify-between mb-2">
            <div className="flex item-center gap-x-2">
              <Link className=" flex items-center justify-center flex-col  flex-shrink-0 ">
                <div className="w-10 h-10 items-center justify-between flex rounded-full object-cover p-[2px]  bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                  <img src={feed.profileImg} alt={feed.profileImg} className=" rounded-full w-full h-full object-cover bg-black " />
                </div>
              </Link>
              <div className="flex items-center gap-x-2">
                <p className="text-white text-sm font-medium">{feed.username}</p>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <p className="text-white text-sm font-medium">{feed.time}</p>
              </div>
            </div>
            <Ellipse />
          </div>
          {/*  lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] 
          lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh] md:min-h-[55vh] sm:min-h-[50vh]:
           min-h-[45vh] */}
          <div className="w-full   border border-gray-500 rounded  overflow-hidden mb-3 ">
            <img src={feed.postImg} alt={feed.caption}
            className="w-full h-auto flex   object-center "/>
           </div>
            <div className="w-full h-auto flex item-center justify-between">
              <div className="flex gap-x-3 items-center">
              <Like/>
                <Comment />
                <Share/>
              </div>
              <Save/>
            </div>
        </div>
      ))}
    </>
  );
};

export default FeedCard;
