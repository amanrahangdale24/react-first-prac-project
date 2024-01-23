import React from 'react'
import { CiUnlock } from "react-icons/ci";
import { MdPaid } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";

const Pricing = () => {
  return (
    <div className=' md:flex justify-center items-center'>
    <div className=' h-[400px] w-[300px]  rounded-md my-3 mx-10 shadow-2xl mt-8 hover:scale-105 duration-500 flex flex-col items-center justify-between'>
      <h1 className='w-full bg-cyan-400 font-bold  text-center py-[20px] text-2xl'>Free</h1>
      <CiUnlock className='text-2xl relative top-[-68px] left-[50px]'/>
      <div>
        <h2 className='w-full  py-[20px] text-center  text-2xl'>$0/mo</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>10 users included</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>2 GB of storage</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Email support</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Help center access</h2>
      </div>
      <button className='py-3 px-10 font-bold border border-blue-600 rounded-md mb-8 hover:bg-blue-600 duration-300'>
        Sign Up for Free
      </button>
    </div>
    <div className=' h-[435px] w-[300px] bg-gray-100 rounded my-3 mx-10 shadow-2xl hover:scale-105 duration-500 flex flex-col items-center justify-between'>
    <h1 className='w-full bg-cyan-400 font-bold  text-center py-[20px] text-2xl'>Premium</h1>
    <MdPaid className='text-2xl relative top-[-78px] left-[90px]'/>
    <div>
        <h2 className='w-full  py-[20px] text-center  text-2xl'>$15/mo</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>20 users included</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>10 GB of storage</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Email support</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Help center access</h2>
      </div>
      <button className='py-3 px-10 font-bold border border-blue-600 rounded-md mb-8 hover:bg-blue-600 duration-300'>
       Get Started
      </button>
    </div>
    <div className=' h-[400px] w-[300px]  rounded my-3 mx-10 shadow-2xl mt-8 hover:scale-105 duration-500 flex flex-col items-center justify-between'>
    <h1 className='w-full bg-cyan-400 font-bold  text-center py-[20px] text-2xl'>Interprise</h1>
    <MdWorkspacePremium className='text-2xl relative top-[-68px] left-[80px]' />

    <div>
        <h2 className='w-full  py-[20px] text-center  text-2xl'>$29/mo</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>30 users included</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>15 GB of storage</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Email support</h2>
        <h2 className='w-full  py-[1px] text-center  text-sm'>Help center access</h2>
      </div>
      <button className='py-3 px-10 font-bold border border-blue-600 rounded-md mb-8 hover:bg-blue-600 duration-300'>
        Contact Us
      </button>
    </div>
   
  </div>

  )
}

export default Pricing
