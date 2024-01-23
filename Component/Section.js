import React from 'react'
import Image from 'next/image'
import bg from '@/assests/laptop.jpg'


const SectionPage = () => {
    return (
        <div className=' py-28 w-full flex justify-around items-center md:flex-row flex-col '>

            <div className='  flex justify-end  md:w-1/2 md:mr-12'>
                <Image src={bg} height={300} />
            </div>
            <div className='  w-[80%] md:w-1/2  flex md:justify-start justify-center text-center md:text-left flex-col md:items-start  mt-8 p-6 '>
                <div className='  text-[#2DFE54] font-extrabold mt-4 mb-1 text-xl'>
                    Learn from Experts
                </div>
                <div className=' text-black leading-5 mb-2 md:w-[80%] text-[14.5px] md:text-[16px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quos nulla atque quaerat quisquam porro quae distinctio corrupti consectetur incidunt doloremque quia unde veritatis a itaque quas praesentium! Incidunt, nemo!
                </div>
                <button className=' text-white bg-black my-5 px-12 py-[10px] font-semibold rounded-md'>
                    Get Started
                </button>
            </div>

        </div>
    )
}

export default SectionPage
