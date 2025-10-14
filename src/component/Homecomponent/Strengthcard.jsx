import React from "react";
import { FaPersonBiking } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { GiStrong } from "react-icons/gi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";
import Strength from "../../assets/strength.jpg";

const Strengthcard = () => {
  return (
    <div className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out">
      {/* Image Section */}
    
        <img
          src={Strength}
          alt="Strength illustration"
          className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
        />
      
      {/* Content Section */}
      <div className="sm:m-5 m-2">
        <h3 className="text-2xl sm:mb-4 mb-2 font-bold text-violet-800">
          Personality & Strengths
        </h3>

        <ul className="sm:space-y-3 space-y-2 text-gray-700">
          {/* Analytical Thinker */}
          <li className="group p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2">
            <IoIosAnalytics className="text-violet-600 group-hover:scale-125 group-hover:text-violet-800 transition-transform duration-300" />
            <span className="group-hover:text-violet-800 font-medium transition-colors">
              Analytical thinker
            </span>
          </li>

          {/* Proactive Leader */}
          <li className="group p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2">
            <FaPersonBiking className="text-violet-600 group-hover:scale-125 group-hover:text-violet-800 transition-transform duration-300" />
            <span className="group-hover:text-violet-800 font-medium transition-colors">
              Proactive leader
            </span>
          </li>

          {/* Strong Communicator */}
          <li className="group p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2">
            <GiStrong className="text-violet-600 group-hover:scale-125 group-hover:text-violet-800 transition-transform duration-300" />
            <span className="group-hover:text-violet-800 font-medium transition-colors">
              Strong communicator
            </span>
          </li>

          {/* Adaptable & Agile */}
          <li className="group p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2">
            <MdOutlineDynamicFeed className="text-violet-600 group-hover:scale-125 group-hover:text-violet-800 transition-transform duration-300" />
            <span className="group-hover:text-violet-800 font-medium transition-colors">
              Adaptable & agile
            </span>
          </li>

          {/* Integrity Driven */}
          <li className="group p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2">
            <SiGamemaker className="text-violet-600 group-hover:scale-125 group-hover:text-violet-800 transition-transform duration-300" />
            <span className="group-hover:text-violet-800 font-medium transition-colors">
              Integrity driven
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Strengthcard;
