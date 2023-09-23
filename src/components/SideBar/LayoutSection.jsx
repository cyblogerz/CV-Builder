import React from 'react'

const LayoutSection = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden border shadow-lg mt-4">
        <div className="px-6 py-4">
            <h1 className='text-xl font-bold'>Layout</h1>
            <div className="flex flex-row mt-4">
            <div>
                <button className="w-16 h-16 bg-cyan-500 mr-4 shadow-lg rounded-md ">
                    <div className='w-7 h-full bg-white rounded-l-md'></div>
                </button>
                <p className='text-xs text-center'>Right</p>
                </div>
                <div>
                <button className="w-16 h-16   shadow-lg rounded-md relative">
  <div className='w-full h-6 bg-cyan-500 rounded-t-md absolute top-0 left-0'></div>
</button>
<p className='text-xs text-center mt-1'>Top</p>
</div>
<div>
                <button className="w-16 h-16 mr-4 shadow-lg rounded-md ml-4">
                    <div className='w-7 h-full bg-cyan-500 rounded-l-md'></div>
                </button>
                <p className='text-xs text-center'>Left</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LayoutSection