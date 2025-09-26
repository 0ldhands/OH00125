import React, { forwardRef, useContext } from "react";
import { IoIosAnalytics } from "react-icons/io";
import { FaPersonBiking, FaChessKing } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";
import { MdOutlineDynamicFeed, MdManageAccounts, MdBusiness } from "react-icons/md";
import { SiGamemaker, SiAdobeaudition } from "react-icons/si";
import { RiGitBranchFill } from "react-icons/ri";
import { FcCustomerSupport, FcProcess } from "react-icons/fc";
import { BsGraphUp } from "react-icons/bs";
import { CgLoadbarDoc } from "react-icons/cg";
import funct from "../assets/function.jpg";
import sql from "../assets/icons/database.png";
import word from "../assets/icons/word.png";
import powerppoint from "../assets/icons/powerbi.png";
import excel from "../assets/icons/excel.png";
import Project from "../assets/skills/project.png";
import { Usercontext } from "../Context/Context";
import Strength from "../assets/strength.jpg";

const Content = forwardRef(() => {
  const val = useContext(Usercontext);
  const { Projects, scrollToSection } = val;

  return (
    <div>
      {/* Summary Section */}
      <div className="border-violet-200 m-5 border-2 rounded-3xl">
        <div className="m-3">
          <h3 className="text-3xl">Summary</h3>
        </div>
        <div className="m-3">
          <p className="text-gray-600">
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

      {/* Technical Skills */}
      <div className="sm:m-5 m-5 bg-violet-500 sm:p-1 p-3 rounded-2xl">
        <h1 className="text-2xl text-center m-5">Technical skills</h1>
        <div className="flex justify-evenly">
          <div>
            <img src={word} alt="word" className="sm:w-20 w-10" />
            <h1 className="text-center text-white text-sm ">Word</h1>
          </div>
          <div>
            <img src={excel} alt="excel" className="sm:w-20 w-10" />
            <h1 className="text-center text-white text-sm">Excel</h1>
          </div>
          <div>
            <img src={powerppoint} alt="powerpoint" className="sm:w-20 w-10" />
            <h1 className="text-center text-white text-sm">PowerBi</h1>
          </div>
          <div>
            <img src={sql} alt="sql" className="sm:w-20 w-10" />
            <h1 className="text-center text-white text-sm">MySQL</h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:justify-evenly sm:flex-row my-5">
        
        {/* Strengths Card */}
        <div className=" border-2 border-violet-200 rounded-2xl m-5 overflow-hidden">
          <img
            src={Strength}
            alt="Strength illustration"
            className="w-full h-64 object-cover object-top"
          />
          <div className="sm:m-5 m-1">
            <h3 className="text-2xl sm:mb-4 mb-1 font-bold text-violet-800">
              Personality & Strengths
            </h3>
            <ul className="sm:space-y-3 space-y-1 text-gray-700">
              <li><IoIosAnalytics className="inline-block mr-2 text-violet-600" /> Analytical thinker</li>
              <li><FaPersonBiking className="inline-block mr-2 text-violet-600" /> Proactive leader</li>
              <li><GiStrong className="inline-block mr-2 text-violet-600" /> Strong communicator</li>
              <li><MdOutlineDynamicFeed className="inline-block mr-2 text-violet-600" /> Adaptable & agile</li>
              <li><SiGamemaker className="inline-block mr-2 text-violet-600" /> Integrity driven</li>
            </ul>
          </div>
        </div>

        {/* Functional Areas Card */}
        <div className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden">
          <img
            src={funct}
            alt="Functional illustration"
            className="w-full h-64 object-cover object-top"
          />
          <div className="sm:m-5 m-1">
            <h3 className="sm:text-2xl sm:mb-4 mb-1 text-2xl font-bold text-violet-800">
              Functional Areas
            </h3>
            <ul className="sm:space-y-3 space-y-1 text-gray-700">
              <li><MdManageAccounts className="inline-block mr-2 text-violet-600" /> Credit & Risk Management</li>
              <li><RiGitBranchFill className="inline-block mr-2 text-violet-600" /> Branch Operations</li>
              <li><FcCustomerSupport className="inline-block mr-2 text-violet-600" /> Customer Relations</li>
              <li><MdBusiness className="inline-block mr-2 text-violet-600" /> Business Development</li>
              <li><FaChessKing className="inline-block mr-2 text-violet-600" /> Leadership & Team Management</li>
              <li><FcProcess className="inline-block mr-2 text-violet-600" /> Process Improvement</li>
              <li><SiAdobeaudition className="inline-block mr-2 text-violet-600" /> Audit & Compliance</li>
              <li><BsGraphUp className="inline-block mr-2 text-violet-600" /> Revenue Growth</li>
            </ul>
          </div>
        </div>

        {/* Project Card */}
        <div className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden" ref={Projects}>
          <img
            src={Project}
            alt="project"
            className="w-full h-64 object-cover object-top"
          />
          <div className="sm:m-5 m-1">
            <h1 className="sm:text-2xl mb-4 text-2xl font-bold text-violet-800 mt-5">
              Project
            </h1>
            <ul className="space-y-3 text-gray-700">
              <li className="cursor-pointer" onClick={() => scrollToSection("Projectwork")}>
                Pay Bill Generation 
                <a className="inline-block" href="public/files/paybill.xls" download="paybill.xls">
                  <CgLoadbarDoc className="ms-5 text-violet-800 inline-block"/> <span className="text-violet-800 text-sm">link</span>
                </a>
              </li>
              <li className="cursor-pointer" onClick={() => scrollToSection("Projectwork")}>
                CashBook/CoinWar/Cash 
                <a className="inline-block" href="public/files/Cashbook.xlsm" download="Cashbook.xlsm">
                  <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" /><span className="text-violet-800 text-sm">link</span>
                </a>
              </li>
              <li className="cursor-pointer" onClick={() => scrollToSection("Projectwork")}>
                JDL Assist 
                <a className="inline-block" href="public/files/JDLdata.xls" download="JDLdata.xls">
                  <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" /><span className="text-violet-800 text-sm">link</span>
                </a>
              </li>
              <li className="cursor-pointer" onClick={() => scrollToSection("Projectwork")}>
                NLD Ledger 
                <a className="inline-block" href="public/files/JDLproucher.xlsm" download="JDLproucher.xlsm">
                  <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" /><span className="text-violet-800 text-sm">link</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
});

export default Content;
