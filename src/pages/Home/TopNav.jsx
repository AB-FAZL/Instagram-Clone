import React from "react";
import InstagramLogo from "../../assets/logo/instagram.png";
import SearchIcon from "../../assets/navlogo/search.png";
import MessageIcon from "../../assets/navlogo/message.png";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <>
      <div className="w-full h-auto lg:hidden md:hidden sm:block block">
        <div className="w-full h-auto flex items-center justify-between">
          <Link>
            <img src={InstagramLogo} alt="Instagram Logo" className=" w-28 h-auto object-contain" />
          </Link>
          <div className="flex item-center gap-x-4 pe-2">
            <Link>
              <img src={SearchIcon} alt="Search Logo" className=" w-6 h-6 " />
            </Link>
            <Link className="relative">
              <img src={MessageIcon} alt="Message Logo" className=" w-6 h-6 " />
              <div className=" absolute -right-2 -top-2 bg-red-500 text-sm text-white rounded-full w-5 h-5 flex items-center"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
