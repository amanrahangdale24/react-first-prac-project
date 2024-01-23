import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const pagenav = () => {
const[toggle , setToggle] = useState(false) ; 
  return (
    <div>
        <h1 className=' h-20 max-w-full bg-cyan-500 flex justify-between items-center p-10 '> 
          <div className='text-[20px] font-bold'>
            College Wallah 
          </div>

          {
            toggle ? 
            <IoMdClose onClick={()=>{setToggle(!toggle)}} className='text-2xl md:hidden block'/> : 
            <AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-2xl md:hidden block'/> 
          }


          <ul className='hidden md:flex gap-9 items-center text-white'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>My Courses</li>
            <button className='border rounded border-black px-4 py-2 hover:bg-white hover:text-cyan-500'>Log in </button>
          </ul>

          {/* Respoinsive menu  */}

          <ul className={` duration-500 md:hidden items-center text-white fixed bg-black w-full h-screen top-20 px-10 ${toggle ? 'left-0' : 'left-[-100%]'} `}>
            <li className=' my-5'>Home</li>
            <li className=' my-5'>About</li>
            <li className=' my-5'>Contact</li>
            <li className=' my-5'>My Courses</li>
            <button className='border rounded border-black px-2 py-1 bg-[#482C32] hover:text-cyan-500 mb-5'>Log in </button>
            
          </ul>



        </h1>
        
    </div>
  )
}

export default pagenav
