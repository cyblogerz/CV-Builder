import React from 'react'
import { FaDownload } from 'react-icons/fa';
import {BsShare} from 'react-icons/bs';
import LayoutSection from './LayoutSection';

const SideBar = () => {
  return (
    <div className=' w-full flex-1 flex-col mt-8 mr-6'>
    <button class="px-4 py-2 font-semibold text-sm text-white 
    bg-gradient-to-r from-blue-700 to-purple-800 text-white transform hover:scale-105 
    transition-transform duration-300 
    ease-in-out rounded-md shadow-md hover:shadow-lg focus:outline-none
     ">
    <div className="flex flex-row items-center">
        <FaDownload />
        <p className='ml-2'>Download now</p>
    </div>
    
    </button>
    <button className="px-4 py-2 font-semibold text-sm w-1/2 
    bg-gradient-to-r from-purple-800 to-indigo-800
     ml-2 text-white rounded-md shadow-lg">
    <div className="flex flex-row items-center">
        <BsShare />
        <p className='ml-2'>Share</p>
    </div>
    </button>
    <LayoutSection />
    <div></div>
  
    </div>
  )
}

export default SideBar