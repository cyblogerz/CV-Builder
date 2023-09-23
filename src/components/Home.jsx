import React, { useState } from 'react'
import PersonalEdit from './Editor/PersonalEdit'
import ExperienceEdit from './Editor/ExperienceEdit'
import EducationEdit from './Editor/EducationEdit'
import Resume from './Resume/Resume'
import details from '../resumeDetails'
import SideBar from './SideBar/SideBar'
import { usePDF } from 'react-to-pdf';

const Home = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
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
   
      <Resume detail={detail} tref={targetRef}/>
  
  </div>
  <SideBar onDownload={()=> toPDF()} />
    

    </div>
  )
}

export default Home