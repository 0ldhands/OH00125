import React from "react";
import strength from '../assets/strength.jpg'
import { IoIosAnalytics } from "react-icons/io";
import { FaPersonBiking } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { RiGitBranchFill } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import { MdBusiness } from "react-icons/md";
import { FaChessKing } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { SiAdobeaudition } from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
import funct from '../assets/function.jpg'

const Content = () => {
  return (
    <div>
      <div className="border-violet-200 m-5 border-2 rounded-3xl">
        <div className="m-3">
          <h3 className="text-3xl">Summary</h3>
        </div>
        <div className="m-3">
          <p>
            {" "}
            I am a senior-level finance professional with over 15 years of
            experience in the banking industry, specializing in credit analysis
            and risk management. I have a proven track record in driving revenue
            growth and improving operational efficiency. My skills extend to
            customer relationship management and business development,
            contributing to sustained growth and profitability in my current
            role at DBS Bank India Ltd. My leadership abilities have facilitated
            the successful setup of new branches and the retention of high-value
            clients.
          </p>
        </div>
      </div> 

      <div className="flex flex-col">
        <div className="flex m-15 justify-between border-2 border-violet-200 rounded-2xl">
          
          <div className="p-3">
            <h3 className="text-3xl">Personality and Strength</h3>
            <ul>
              <li>
                <IoIosAnalytics className="inline-block mr-2 text-violet-600"/>
                Analytical and detail-oriented with a strong problem-solving
                mindset.
              </li>
              <li className="sm:ml-10">
                <FaPersonBiking className="inline-block mr-2 text-violet-600"/>
                Proactive leader with the ability to drive operational
                efficiency.
              </li>
              <li  className="sm:ml-20">
                <GiStrong className="inline-block mr-2 text-violet-600"/>
                Strong interpersonal and relationship-building skills</li>
              <li  className="sm:ml-30">
                <MdOutlineDynamicFeed  className="inline-block mr-2 text-violet-600"/>
                Adaptable to dynamic work environments with a continuous
                learning attitude
              </li>
              <li  className="sm:ml-40">
                <SiGamemaker className="inline-block mr-2 text-violet-600"/>
                High ethical standards and integrity in financial
                decision-making.
              </li>
            </ul>
          </div>
          <div>
            <img src={strength} alt="" className="w-50 rounded-2xl"/>
          </div>
        </div>
        <div className="flex justify-evenly m-15 border-2 border-violet-200 rounded-2xl">

          <div>
            <img src={funct} alt="" className="w-65"/>
          </div>
          
          <div className="p-3">
            <h3 className="text-3xl">Functional Areas</h3>
            <ul>
              <li>
                <MdManageAccounts className="inline-block mr-2 text-violet-600"/>
                Credit analysis & Risk Management</li>
              <li className="sm:ml-10">
                 <RiGitBranchFill className="inline-block mr-2 text-violet-600"/>
                Branch Operations Management</li>
              <li className="sm:ml-20">
                 <FcCustomerSupport className="inline-block mr-2 text-violet-600"/>
                Customer Relationship Management</li>
              <li className="sm:ml-30">
                 <MdBusiness className="inline-block mr-2 text-violet-600"/>
                Business Development</li>
              <li className="sm:ml-40">
                 <FaChessKing className="inline-block mr-2 text-violet-600"/>
                Leadership & Team Management</li>
              <li className="sm:ml-50">
                 <FcProcess className="inline-block mr-2 text-violet-600"/>
                Process Improvement & SLA Management</li>
              <li className="sm:ml-60">
                 <SiAdobeaudition className="inline-block mr-2 text-violet-600"/>
                Audit & Compliance</li>
              <li className="sm:ml-70">
                 <BsGraphUp className="inline-block mr-2 text-violet-600"/>
                Revenue Growth & Profitability </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
