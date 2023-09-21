import React from 'react'

const EducationEdit = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden border shadow-lg">
  
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Education</div>
      <div class="mt-8 max-w-md">
              <div class="grid grid-cols-1 gap-6">
                <label class="block">
                  <span class="text-gray-700">School</span>
                  <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Enter School/uni" />
                </label>
                <label class="block">
                  <span class="text-gray-700">Degree</span>
                  <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Enter degree/field of study" />
                </label>

                <div className='flex flex-row'>
                <label class="block mr-4">
                  <span class="font-bold">Start date</span>
                  <input type="tel" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Enter your number" />
                </label>
                <label class="block">
                  <span class="font-bold">End date</span>
                  <input type="tel" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Enter your number" />
                </label>
                </div>
                
                <label class="block">
                  <span class="text-gray-700">Location</span>
                  <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="" />
                </label>
              </div>
            </div>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag2</span>
    </div>
  </div>
  )
}

export default EducationEdit