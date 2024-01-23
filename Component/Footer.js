import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' md:flex justify-evenly items-center py-16 bg-cyan-500 mt-14'>
            <div className=' flex flex-col items-start justify-evenly md:w-1/3 h-52 px-5'>
                <h1 className=' font-extrabold text-[28px] cursor-pointer'>College Wallah.</h1>
                <p className=' text-sm text-white font-semibold leading-5 mb-5 text-start text-wrap '>Length and appearance do not self practice web. determine whether  in  is a paragraph. For instance, a paragraph can be just one sentence long.</p>
                <div className='flex w-[80%] gap-10 text-white'>
                    <h1 className=' text-2xl font-bold'> <FaInstagram className=' cursor-pointer' /> </h1>
                    <h1 className=' text-2xl font-bold'> <FaFacebook className=' cursor-pointer' /> </h1>
                    <h1 className=' text-2xl font-bold'> <FaTwitter className=' cursor-pointer' /> </h1>
                    <h1 className=' text-2xl font-bold'> <FaGithub className=' cursor-pointer' /> </h1>
                </div>
            </div>
            <div>
                <div className=' flex flex-col items-start justify-evenly  h-48 px-5'>
                    <h1 className=' text-black font-semibold cursor-pointer'>Solutions</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Analytics</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Marketing</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Commerce</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Insights</h1>
                </div>
            </div>
            <div>
                <div className=' flex flex-col items-start justify-evenly  h-48 px-5'>
                    <h1 className=' text-black font-semibold cursor-pointer'>Support </h1>
                    <h1 className=' text-white text-sm cursor-pointer'>Pricing</h1>
                    <h1 className=' text-white text-sm cursor-pointer'>Documentation</h1>
                    <h1 className=' text-white text-sm cursor-pointer'>Guides</h1>
                    <h1 className=' text-white text-sm cursor-pointer'>Api Status</h1>
                </div>
            </div>
            <div>
                <div className=' flex flex-col items-start justify-evenly  h-48  px-5'>
                    <h1 className=' text-black font-semibold cursor-pointer'>Company </h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>About</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Blog</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Jobs</h1>
                    <h1 className=' text-white text-sm  cursor-pointer'>Careers</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
