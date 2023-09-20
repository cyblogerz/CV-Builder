import React from 'react'
import PersonalEdit from './Editor/PersonalEdit'
import ExperienceEdit from './Editor/ExperienceEdit'
import EducationEdit from './Editor/EducationEdit'

const Home = () => {
  return (
    <div className='flex container flex-row'>
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
    <div>
        {/* ResumePreview */}
    </div>
    

    </div>
  )
}

export default Home