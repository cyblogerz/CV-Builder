import React from 'react'
import PersonalEdit from './Editor/PersonalEdit'
import ExperienceEdit from './Editor/ExperienceEdit'
import EducationEdit from './Editor/EducationEdit'
import Resume from './Resume/Resume'

const Home = () => {
  return (
    <div className='flex w-full bg-white flex-row'>
    <div className='flex flex-col'>
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
    <div className='flex-1'>
        <Resume />
    </div>
    

    </div>
  )
}

export default Home