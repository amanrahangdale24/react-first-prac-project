"use client"
import React, { useState } from 'react'
import Nav from '@/Component/Nav'
import Banner from '@/Component/Banner'
import SectionPage from '@/Component/Section'
import NewsLetter from '@/Component/NewsLetter'
import Pricing from '@/Component/Pricing'
import Footer from '@/Component/Footer'

// import { CiUnlock } from "react-icons/ci";
// import { MdPaid } from "react-icons/md";
// import { MdWorkspacePremium } from "react-icons/md";
// const[toggle , setToggle] = useState(false) ;

// import { AiOutlineMenu } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";

// import ReactTyped from 'react-typed'

// import Image from 'next/image'
// import bg from '@/assests/laptop.jpg'



// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

const page = () => {
  
  return (
    <>
      <Nav />

      <Banner />

      <SectionPage/> 

      <NewsLetter/>
   

      <Pricing/>     

      <Footer/>
   
    </>
  )
  
}

export default page
