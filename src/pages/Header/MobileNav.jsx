import React from "react";
import SearchIcon from "../../assets/navlogo/search.png";
import HomeIcon from "../../assets/navlogo/home.png";
import ExploreIcon from "../../assets/navlogo/explore.png";
import ReelsIcon from "../../assets/navlogo/reel.png";
import MessageIcon from "../../assets/navlogo/message.png";
import NotificationsIcon from "../../assets/navlogo/like.png";
import CreateIcon from "../../assets/navlogo/create.png";

import { Link } from "react-router-dom";

const MobileNav = () => {
  const sidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: SearchIcon,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: ExploreIcon,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: ReelsIcon,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: MessageIcon,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: NotificationsIcon,
    },
    {
      name: "Create",
      link: "/create",
      icon: CreateIcon,
    },
  ];
  return (
    <>
      <div className="  w-full h-full relative bg-black ">
        <div className="w-full h-auto flex  items-start flex-row gap-y-2 ">
          <Link className="w-full h-auto flex justify-center items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src={HomeIcon}
              alt="Home icon"
              className=" w-6 h-6 object-contain  group-hover:scale-105
               ease-out duration-300 "
            />
          </Link>
          <Link className="w-full h-auto flex items-center justify-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src={SearchIcon}
              alt="Searchicon"
              className="   w-6 h-6 object-cover group-hover:scale-105
             ease-out duration-300 "
            />
          </Link>
          <Link className="w-full h-auto flex items-center justify-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src={CreateIcon}
              alt="Create icon"
              className="   w-6 h-6 object-contain group-hover:scale-105
             ease-out duration-300 "
            />
          </Link>
          <Link className="w-full h-auto flex items-center justify-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src={ReelsIcon}
              alt="Reels icon"
              className=" w-6 h-6 object-contain group-hover:scale-105
             ease-out duration-300 "
            />
          </Link>
          <Link to="/Profile" className=" items-center w-full h-auto flex justify-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src="https://source.unsplash.com/random/?profile"
              alt="Profile icon"
              className="  rounded-full w-6 h-6 object-cover group-hover:scale-105
             ease-out duration-300 "
            />
                  </Link>
            
        </div>
      </div>
    </>
  );
};

export default MobileNav;
