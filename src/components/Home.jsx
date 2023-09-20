import React from 'react'
import PersonalEdit from './Editor/PersonalEdit'

const Home = () => {
  return (
    <div className='flex flex-row'>
    <div className='flex flex-col'>
        {/* Editor section */}
        <div>
            <PersonalEdit />
        </div>
        <div>
            {/* Education */}
        </div>
        <div>
            {/* Experience */}
        </div>
    </div>
    <div>
        {/* ResumePreview */}
    </div>
    

    </div>
  )
}

export default Home