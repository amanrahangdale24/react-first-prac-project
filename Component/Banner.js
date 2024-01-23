import React from 'react'
import ReactTyped from 'react-typed'
const BannerPage = () => {
  return (
    <>
    <div className=' bg-cyan-500 w-full flex justify-center items-center flex-col h-full border-black'>
        <div className='flex justify-center items-center flex-col py-40'>
          <div className=' text-2xl md:text-3xl font-bold  my-1 md:my-3'>
            Learn with Us
          </div>
          <div className='text-[35px] md:text-6xl text-white my-1 md:my-3 font-[900]'>
            Grow With Us.
          </div>
          <div className=' text-2xl md:text-4xl font-bold text-white my-1 md:my-3'>
            Learn <ReactTyped
              strings={["Web Development", "Ethical Hacking", "Android Development", "Prompt Engineering "]}
              typeSpeed={100}
              loop={true}
              backSpeed={80}
            />
          </div>

          <button className=' text-white bg-black my-5 px-12 py-[10px] font-semibold rounded-md' >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default BannerPage
