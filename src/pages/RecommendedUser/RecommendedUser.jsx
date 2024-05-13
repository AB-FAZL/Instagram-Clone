import React from "react";
import ProfileNav from "./ProfileNav/ProfileNav"
import { Link } from "react-router-dom";
import RecommendedUserData from "./RecommendedUserData";

const RecommendedUser = () => {
    return(

        <><div className="w-full h-auto py-3  items-center  relative justify-center">
            

            <ProfileNav />
            <div className=" w-full h-auto my-8 ">
                <h6 className="text-sm text-gray-400 font-medium">
                    Suggested for you
                </h6>
                <Link className=" text-xs  text-gray-200 hover:text-gray-400 font-semibold" to="/">See All</Link>
            </div>
            {RecommendedUserData.map((user) => (
                <div className="w-full h-auto flex items-center justify-between mb-4" >
                    <Link to="/Profile" className=" w-full h-auto flex items-center  gap-x-2">
                        <img src={user.profileImg} alt={user.username} className="w-12 h-12 rounded-full object-cover" />
                        <div className=" flex items-start gap-y-0 flex-col">
                            <p className="text-[0.9rem] text-white font-medium mb-0" >
                                {user.username}
                            </p>
                            <h6 className=" text-xs text-gray-500 font-normal">Suggested for you</h6>
                        </div>
                    </Link>
                    <Link to="/" className=" mr-1 hover:text-gray-600 text-blue-400 text-[0.855rem]">{user.follow}</Link>
                </div>

            ))}



        </div>
        
        </>
    )

}



export default RecommendedUser;