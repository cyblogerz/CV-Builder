import React, { useState , useEffect} from 'react'
import FInput from '../UI/Form/FInput'

const PersonalEdit = (props) => {
  const [pdetails,setPdetails] = useState({
    name : '',
    email : '',
    phone : '',
    address: ""
  })

  const ChangeHandler = (event) =>{
    const {name,value} = event.target
    setPdetails(
      (prevState) => {
        return {...prevState , [name]:value}
      }
    )
  }

  useEffect(() => {
    props.onvalChange(pdetails);
  }, [pdetails]);


  return (
    <div className="max-w-sm rounded-lg  my-4 overflow-hidden border shadow-lg">
  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 ">Personal Details</div>
    <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Full name</span>
                <FInput type={'text'} handler={ChangeHandler} holder={""} name="name"/>
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <FInput type='email'
                handler={ChangeHandler}
                name="email"
                holder="john@example.com"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Phone number</span>
                <FInput type='tel'
                handler={ChangeHandler}
                name="phone"
                holder="Enter your number"
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Linkedin</span>
                <FInput type='text'
                handler={ChangeHandler}
                name="linkedin"
                holder=""
                />
              </label>
            </div>
          </div>
  </div>
  
</div>

  )
}

export default PersonalEdit