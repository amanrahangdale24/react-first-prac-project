import React from 'react'

const NewsLetter = () => {
    return (
        <div className=' w-full py-20 bg-cyan-500  md:flex justify-around '>

            <div className='flex flex-col text-white text-center '>
                <h1 className=' text-[22px] md:text-3xl font-extrabold py-1 md:py-3'>Want to Learn Latest I.T Skills ? </h1>
                <h3>Sign up to our newsletter to stay up to date</h3>
            </div>

            <div className='flex flex-col '>
                <form className='mt-6 md:my-3'>
                    <input type='email' placeholder='Enter Email' className='meriMarzi rounded-md px-1 md:px-3 py-[7px] md:py-[11px] md:text-lg  mx-4 md:mx-0' />
                    <button className=' bg-black text-white font-semibold px-3 md:px-5 py-1 md:py-3 rounded-md mx-4 md:mx-8'>Notify Me! </button>
                </form>
                <div className=' text-center md:flex flex-col items-start'>
                    <h2 className='mt-3 text-white'>We care bout the protection of your data read our </h2>
                    <h3 className=' cursor-pointer'>Privacy Policy</h3>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
