import React from 'react'
import { Link } from 'react-router-dom'
import Setting from '../../../Components/Icons/Settings/Settings'
const Profile = () => {
  return (
    <>
          <div className='w-full h-auto md:w-[88%] hidden md:block'>
              <div className="w-full h-auto flex items-center justify-center gap-x-8 flex-row 
               sm:gap-x-12 md:gap-x-16 lg:gap-x-20">
                  <img
                      src="https://source.unsplash.com/random/?climber"
                      alt="profile img"
                      className='rounded-full w-32 sm:w-36 md:w-44  h-32 sm:h-36 md:h-44 object-cover' />
                  <div className="flex h-32 sm:h-36 md:h-44 items-start flex-col ">
                      <div className='flex items-center gap-x-5 mb-4'>
                          <Link to="/Profile" className=" text-lg text-gray-200 font-normal" >AB-FAZL</Link>
                          <div className="flex items-start gap-x-2">
                              <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                  Edit Profile
                              </button>
                              <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>
                                  view archive
                              </button>
                          </div>
                          <Setting/>     
                      </div>
                      <div className='flex gap-x-6 mb-4 items-center'></div>

                  </div>
                  
            </div>
          </div>  
      </>
  )
}

export default Profile