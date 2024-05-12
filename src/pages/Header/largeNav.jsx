import React from "react";
import InstagramIcon from "../../assets/logo/icon.png";
import InstagramLogo from "../../assets/logo/instagram.png";
import SearchIcon from "../../assets/navlogo/search.png";
import HomeIcon from "../../assets/navlogo/home.png";
import ExploreIcon from "../../assets/navlogo/explore.png";
import ReelsIcon from "../../assets/navlogo/reel.png";
import MessageIcon from "../../assets/navlogo/message.png";
import NotificationsIcon from "../../assets/navlogo/like.png";
import CreateIcon from "../../assets/navlogo/create.png";
import ThreadsIcon from "../../assets/navlogo/threads.png";
import MoreIcon from "../../assets/navlogo/more.png";
import { Link } from "react-router-dom";

const LargeNav = () => {
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
      <div className=" text-white w-full h-full relative">
        <Link to="/" className="mb-10 px-2 hidden lg:block">
          <img src={InstagramLogo} alt="" />
        </Link>
        <Link to="/" className="mb-10 px-2 lg:hidden   hidden md:block">
          <img src={InstagramIcon} alt="" />
        </Link>
        <div className="w-full h-auto flex  items-start flex-col gap-y-2">
          <Link className="w-full h-auto flex items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src={HomeIcon}
              alt="Home icon"
              className=" w-6 h-6 object-contain  group-hover:scale-105
             ease-out duration-300 "
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">Home</p>
          </Link>
          {sidebarItems.map((item) => (
            <Link
              to={item.icon}
              key={item.id}
              className="w-full h-auto flex items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group"
            >
              <img
                src={item.icon}
                alt={item.name + " icon"}
                className=" w-6 h-6 object-contain  group-hover:scale-105
             ease-out duration-300 "
              />
              <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">{item.name}</p>
            </Link>
          ))}
          <Link className="w-full h-auto flex items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
            <img
              src="https://source.unsplash.com/random/?profile"
              alt="Profile icon"
              className="  rounded-full w-6 h-6 object-cover group-hover:scale-105
             ease-out duration-300 "
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">Profile</p>
          </Link>
          <div className="w-full h-auto absolute bottom-0 left-0 px-0">
            <Link className="w-full h-auto flex items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
              <img
                src={ThreadsIcon}
                alt="Threads icon"
                className="  rounded-full w-6 h-6 object-cover group-hover:scale-105
             ease-out duration-300 "
              />
              <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">Thresds</p>
            </Link>
            <Link className="w-full h-auto flex items-center flex-row gap-x-4 p-3 bg-transparent  hover:bg-gray-800 rounded-md   ease-out duration-500 group">
              <img
                src={MoreIcon}
                alt="More icon"
                className="  rounded-full w-6 h-6 object-cover group-hover:scale-105
             ease-out duration-300 "
              />
              <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">More</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
