import React from 'react'

const ExperienceEdit = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden border my-4 shadow-lg">
  
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Experience</div>
      <div class="mt-8 max-w-md">
              <div class="grid grid-cols-1 gap-6">
                <label class="block">
                  <span class="font-bold">Company name</span>
                  <input type="text" class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder="Enter School/uni" />
                </label>
                <label class="block">
                  <span class="font-bold">Position title</span>
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
                  <span class="font-bold">Location</span>
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

export default ExperienceEdit