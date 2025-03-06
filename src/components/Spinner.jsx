import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
