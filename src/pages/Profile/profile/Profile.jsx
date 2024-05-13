import React from 'react'
import { Link } from 'react-router-dom'
import Setting from '../../../Components/Icons/Settings/Settings'
import Linkicon from '../../../Components/Icons/LinkIcon/LinkIcon'
import  HighlightData from './HighlightData'
const Profile = () => {
  return (
    <>
          <div className='w-full h-auto md:w-[88%] hidden md:block  '>

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
                      <div className='flex gap-x-6 mb-4 items-center'>
                          <h6 className="text-base font-normal text-gray-100">10 posts</h6>
                          <Link to="/Profile"  className="text-base font-normal text-gray-100">1200 Followers</Link>
                          <Link to="/Profile"  className="text-base font-normal text-gray-100">100 Following</Link>
                      </div>
                  <p className=" text-lg font-normal text-gray-100 my-2">ABOLFAZL</p>

                      <p className="text-base font-normal text-gray-100">
                          A self-taught programmer, loves to code,<br/>
                          interested in working with a team Professional <br />
                          and looking for progress in the field of end-front
                      </p>
                      <p className="text-base font-normal text-gray-100 flex items-center gap-x-2">
                          <Linkicon/>
                      </p>
                  </div>
                  
              </div>
              <div className=' w-full  h-auto flex items-center gap-x-9  mb-10 mt-16 overflow-x-auto'>
                  {HighlightData.map((item) => (
                      <Link to='' key={item.id} className='flex items-center justify-between flex-col flex-shrink-0'>
                          <div className=' w-28 h28  rounded-full  object aspect-square
                          p-[2px] bg-gradient-to-r from-gray-600 to-gray-500'>      
                              <img src={item.img}
                                  alt={item.name}
                              className=' object-cover rounded-full  bg-black px-[2px] aspect-square'/>
                          </div>
                            <p className='text-base font-normal text-gray-100 mt-2'>{item.name}</p>
                          </Link> 
                  ))}
              </div>

          </div>  
      </>
  )
}

export default Profile