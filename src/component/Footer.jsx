import React from 'react'
import '../index.css'
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='bg-black rounded-t-full p-3 text-violet-600 flex justify-center'>
        <p id='end-note'>Thank you for exploring my portfolio.</p>
      </div>
      <div id='footer-container' className='flex flex-col items-center'>
        <ul className='m-3'>
          <li className='inline-block sm:mx-10 mx-5'>
            <IoCall size={25}/>
          </li>
          <li className='inline-block sm:mx-10 mx-5'>
            <FaInstagram size={25} />
          </li>
          <li className='inline-block sm:mx-10 mx-5'>
            <BiLogoGmail size={25}/>
          </li>
          <li className='inline-block sm:mx-10 mx-5'>
            <FaLinkedin size={25}/>
          </li>
        </ul>
            <p className='m-3 text-white'>© 2025 Gnana Sekar. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer