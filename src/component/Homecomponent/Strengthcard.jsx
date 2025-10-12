import React, { lazy } from "react";
import { FaPersonBiking } from "react-icons/fa6";
import { IoIosAnalytics } from "react-icons/io";
import { GiStrong } from "react-icons/gi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";
import Strength from "../../assets/strength.jpg"
import LazyLoad from 'react-lazyload';

const Strengthcard = () => {
  return (
    <div className=" border-2 border-violet-200 rounded-2xl m-5 overflow-hidden">
      <LazyLoad height={200} offset={100}>
          <img
        src={Strength}
        alt="Strength illustration"
        className="w-full h-64 object-cover object-top"
      />
      </LazyLoad>
    
      <div className="sm:m-5 m-1">
        <h3 className="text-2xl sm:mb-4 mb-1 font-bold text-violet-800">
          Personality & Strengths
        </h3>
        <ul className="sm:space-y-3 space-y-1 text-gray-700">
          <li>
            <IoIosAnalytics className="inline-block mr-2 text-violet-600" />{" "}
            Analytical thinker
          </li>
          <li>
            <FaPersonBiking className="inline-block mr-2 text-violet-600" />{" "}
            Proactive leader
          </li>
          <li>
            <GiStrong className="inline-block mr-2 text-violet-600" /> Strong
            communicator
          </li>
          <li>
            <MdOutlineDynamicFeed className="inline-block mr-2 text-violet-600" />{" "}
            Adaptable & agile
          </li>
          <li>
            <SiGamemaker className="inline-block mr-2 text-violet-600" />{" "}
            Integrity driven
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Strengthcard;
