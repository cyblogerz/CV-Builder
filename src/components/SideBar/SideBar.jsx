import React from 'react'
import { FaDownload } from 'react-icons/fa';
import {BsShare} from 'react-icons/bs';

const SideBar = () => {
  return (
    <div className=' w-full flex-1 flex-col mt-8 mr-6'>
    <button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-lg">
    <div className="flex flex-row items-center">
        <FaDownload />
        <p className='ml-2'>Download now</p>
    </div>
    
    </button>
    <button class="px-4 py-2 font-semibold text-sm w-1/2 bg-cyan-500 ml-2 text-white rounded-full shadow-lg">
    <div className="flex flex-row items-center">
        <BsShare />
        <p className='ml-2'>Share</p>
    </div>
    </button>
    <div className="max-w-sm rounded-lg overflow-hidden border shadow-lg mt-4">
        <div className="px-6 py-4">
            <h1 className='text-xl font-bold'>Layout</h1>
            <div className="flex flex-row"></div>
        </div>
    </div>
    <div></div>
  
    </div>
  )
}

export default SideBar