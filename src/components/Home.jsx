import React from 'react'
import PersonalEdit from './Editor/PersonalEdit'
import ExperienceEdit from './Editor/ExperienceEdit'
import EducationEdit from './Editor/EducationEdit'
import Resume from './Resume/Resume'

const Home = () => {
  return (
    <div className='flex w-full bg-white flex-row '>
    <div className='flex flex-col ml-20 h-screen overflow-y-auto'>
        {/* Editor section */}
        <div>
            <PersonalEdit />
        </div>
        <div>
            <EducationEdit />
        </div>
        <div>
            <ExperienceEdit />
        </div>
    </div>
    <div className='w-1/2 h-screen m-8 border'>
    {/* Set the Resume div to A4 size */}
   
      <Resume />
  
  </div>
    

    </div>
  )
}

export default Home