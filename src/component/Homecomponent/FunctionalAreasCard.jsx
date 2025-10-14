import React, { useContext, useState } from "react";
import { MdManageAccounts } from "react-icons/md";
import { RiGitBranchFill } from "react-icons/ri";
import { FcCustomerSupport } from "react-icons/fc";
import { MdBusiness } from "react-icons/md";
import { FaChessKing } from "react-icons/fa6";
import { FcProcess } from "react-icons/fc";
import { SiAdobeaudition } from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
import funct from "../../assets/function.jpg";
import { Usercontext } from "../../Context/Context";

const FunctionalAreasCard = () => {
  const [showMore, setShowMore] = useState(false);

  const{theme,setTheme}=useContext(Usercontext)

  const textTheme="text-blue-500"
  const bgTheme="bg-gray-500"


  const items = [
    { icon: <MdManageAccounts className={theme?"text-violet-600":textTheme} />, text: "Credit & Risk Management" },
    { icon: <RiGitBranchFill className={theme?"text-violet-600":textTheme} />, text: "Branch Operations" },
    { icon: <FcCustomerSupport />, text: "Customer Relations" },
    { icon: <MdBusiness className={theme?"text-violet-600":textTheme}  />, text: "Business Development" },
    { icon: <FaChessKing className={theme?"text-violet-600":textTheme}  />, text: "Leadership & Team Management" },
    { icon: <FcProcess className={theme?"text-violet-600":textTheme}/>, text: "Process Improvement"  },
    { icon: <SiAdobeaudition className={theme?"text-violet-600":textTheme}  />, text: "Audit & Compliance" },
    { icon: <BsGraphUp className={theme?"text-violet-600":textTheme}  />, text: "Revenue Growth" },
  ];

  const visibleItems = showMore ? items : items.slice(0, 5);

  return (
    <div className={`border-1 ${theme ? "border-violet-200" :"border-gray-600"}  rounded-2xl m-5 overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out`}>
      {/* Image Section */}
   
        <img
          src={funct}
          alt="Functional illustration"
          className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
        />
     

      {/* Content Section */}
      <div className="sm:m-5 m-2">
        <h3 className={`text-2xl sm:mb-4 mb-2 font-bold ${theme?"text-violet-800":"text-gray-300"}`}>
          Functional Areas
        </h3>

        <ul className={`sm:space-y-3 space-y-2 ${theme?"text-gray-700":"text-black"}`}>
          {visibleItems.map((item, index) => (
            <li
              key={index}
              className={`group p-3 rounded-lg ${theme?"bg-violet-50 hover:bg-violet-100":"bg-gray-500 hover:bg-gray-400"} hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex items-center gap-2`}
            >
              <span className={`group-hover:scale-125 group-hover:${theme?"text-violet-800":textTheme} transition-transform duration-300`}>
                {item.icon}
              </span>
              <span className={`group-hover:${theme?"text-violet-800":textTheme} font-medium transition-colors`}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {/* See More / Less Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`${theme?"text-violet-700 hover:text-violet-900 hover:bg-violet-100":"text-blue-500 hover:text-blue-900 hover:bg-gray-500"}  font-semibold text-sm border border-violet-300 rounded-full px-4 py-2  transition-all duration-300`}
          >
            {showMore ? "See Less ↑" : "See More ↓"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionalAreasCard;
