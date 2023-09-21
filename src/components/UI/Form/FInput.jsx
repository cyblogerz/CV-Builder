import React from 'react'

const FInput = (props) => {
    
  return (
    <input type={props.type} 
    onChange={props.handler}
    name={props.name}
    class="mt-1 block w-full 
    rounded-md 
    bg-gray-100 
    border-transparent 
    focus:border-gray-500 
    focus:bg-white focus:ring-0" 
    placeholder={props.holder} />
  )
}



export default FInput