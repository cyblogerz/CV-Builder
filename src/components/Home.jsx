import React, { useState } from 'react'
import PersonalEdit from './Editor/PersonalEdit'
import ExperienceEdit from './Editor/ExperienceEdit'
import EducationEdit from './Editor/EducationEdit'
import Resume from './Resume/Resume'
import details from '../resumeDetails'

const Home = () => {
    const [detail,setDetail] = useState(details)
    const pvalChangeHandler = (val) =>{
        console.log(val)
        setDetail((prevState) =>{
            return {...prevState,personalDetails:{...prevState.personalDetails,...val}}
        })


    }
  return (
    <div className='flex w-full bg-white flex-row  '>
    <div className='flex flex-col ml-20 h-screen flex-1 overflow-y-auto mt-4'>
        {/* Editor section */}
        <div>
            <PersonalEdit onvalChange={pvalChangeHandler}/>
        </div>
        <div>
            <EducationEdit />
        </div>
        <div>
            <ExperienceEdit />
        </div>
    </div>
    <div className='w-1/2 min-h-screen m-8 border'>
    {/* Set the Resume div to A4 size */}
   
      <Resume detail={detail}/>
  
  </div>
  <div className=' w-full flex-1 flex-col'>
  <div></div>
  <div></div>
  <div></div>

  </div>
    

    </div>
  )
}

export default Home