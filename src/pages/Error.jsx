import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegSadCry } from "react-icons/fa";

const Error = () => {
  return (
    <div className='mt-10 text-center text-black-500 flex flex-col items-center mx-5'>
      <div>
            <div className='text-[100px] my-10 text-black-500 ml-[30px]'><FaRegSadCry/></div>
            <div className='text-xl text-center font-semibold '>An error occurred</div>
            <div className='text-lg text-center font-normal'>Back to <span><Link className='font-bold text-secondary-400' to={'/'}>Home</Link></span></div>
         </div>
    </div>
  )
}

export default Error
