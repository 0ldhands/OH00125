import React, { useContext, useState } from 'react'
import '../index.css'
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { Usercontext } from '../Context/Context';

const Footer = () => {

  const{theme,setTheme}=useContext(Usercontext)

  return (
    <div>
      <div className={`bg-black rounded-t-full p-3 ${theme ? "text-violet-600" : "text-blue-500"} flex justify-center`}>
        <p id='end-note'>Thank you for exploring my portfolio.</p>
      </div>

      <div id={theme ? 'footer-container' : 'footer-container2'} className='flex flex-col items-center'>
        <ul className='m-3 flex'>
          {/* Phone */}
          <li className='relative group inline-block sm:mx-10 mx-5'>
            <IoCall size={25} className="text-white cursor-pointer" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
             +91-9843938246
            </span>
          </li>

          {/* Instagram */}
          <li className='relative group inline-block sm:mx-10 mx-5'>
            <FaInstagram size={25} className="text-white cursor-pointer" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
              Instagram
            </span>
          </li>

          {/* Gmail */}
          <li className='relative group inline-block sm:mx-10 mx-5'>
            <BiLogoGmail size={25} className="text-white cursor-pointer" />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
             sekar2486@gmail.com
            </span>
          </li>

          {/* LinkedIn */}
          <li className='relative group inline-block sm:mx-10 mx-5'>
            <FaLinkedin size={25} className="text-white cursor-pointer"/>
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition">
             linkedin.com/in/sekar2486
            </span>
          </li>
        </ul>

        <p className='m-3 text-white'>© 2025 Gnana Sekar. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
