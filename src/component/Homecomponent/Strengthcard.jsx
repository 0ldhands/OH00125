import React, { useContext, useState } from "react";
import { IoIosAnalytics } from "react-icons/io";
import { FaPersonBiking } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { SiGamemaker } from "react-icons/si";
import Strength from "../../assets/strength.jpg";
import { Usercontext } from "../../Context/Context";

const Strengthcard = () => {
  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(Usercontext);

  const textTheme = "text-blue-500";

  const items = [
    {
      icon: <IoIosAnalytics className={theme ? "text-violet-600" : textTheme} />,
      text: "Analytical Thinker",
    },
    {
      icon: <FaPersonBiking className={theme ? "text-violet-600" : textTheme} />,
      text: "Proactive Leader",
    },
    {
      icon: <GiStrong className={theme ? "text-violet-600" : textTheme} />,
      text: "Strong Communicator",
    },
    {
      icon: (
        <MdOutlineDynamicFeed
          className={theme ? "text-violet-600" : textTheme}
        />
      ),
      text: "Adaptable & Agile",
    },
    {
      icon: <SiGamemaker className={theme ? "text-violet-600" : textTheme} />,
      text: "Integrity Driven",
    },
    // Extra traits for "See More"
  ];

  const visibleItems = showMore ? items : items.slice(0, 5);

  return (
    <div className="border-1 border-violet-200 rounded-2xl m-5 overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out">
      {/* Image Section */}
      <img
        src={Strength}
        alt="Strength illustration"
        className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Content Section */}
      <div className="sm:m-5 m-2">
        <h3
          className={`text-2xl sm:mb-4 mb-2 font-bold ${
            theme ? "text-violet-800" :"text-gray-300"
          }`}
        >
          Personality & Strengths
        </h3>

        <ul
          className={`sm:space-y-3 space-y-2 ${
            theme ? "text-gray-700" : "text-black"
          }`}
        >
          {visibleItems.map((item, index) => (
            <li
              key={index}
              className={`group p-3 rounded-lg ${
                theme
                  ? "bg-violet-50 hover:bg-violet-100"
                  : "bg-gray-500 hover:bg-gray-400"
              } hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2`}
            >
              <span
                className={`group-hover:scale-125 group-hover:${
                  theme ? "text-violet-800" : textTheme
                } transition-transform duration-300`}
              >
                {item.icon}
              </span>
              <span
                className={`group-hover:${
                  theme ? "text-violet-800" : textTheme
                } font-medium transition-colors`}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* See More / Less Button */}
      
      </div>
    </div>
  );
};

export default Strengthcard;
