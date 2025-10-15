import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiArrowDown } from "react-icons/fi";
import DetailExperience from "./DetailExperience";
import { Usercontext } from "../../Context/Context";

const Workexperience = () => {
  const work = [
    {
      company: "DBS Bank India Ltd.",
      role: "Specialist, Credit Analysis ",
      location: "Ambur Branch",
      year1: "Dec’2022",
      year2: "Aug’2023",
      arr:true
    },
    {
      company: "DBS Bank India Ltd.",
      role: "Branch Manager",
      location: "Ambur Branch",
      year1: "Apr’2017",
      year2: "Apr’2022",
      arr:true
    },
     {
      company: "DBS Bank India Ltd.",
      role: "Branch Manager",
      location: "Venjuvancheri Branch",
      year1: "Aug’2015",
      year2: "Apr’2017",
      arr:true
    },
    {
      company: "DBS Bank India Ltd.",
      role: "Assistant Managerr",
      location: "Kancheepuram Branch ",
      year1: "Sep’2011",
      year2: "Aug’2015",
      arr:true
    },
    {
      company: "DBS Bank India Ltd.",
      role: "Clerk",
      location: "T. Nagar, Chennai Branch",
      year1: "Dec’2009",
      year2: "Aug’2011",
      arr:false
    },
  ];

  const {theme,setTheme}=useContext(Usercontext)

  return (
    <div className={`p-6 sm:p-10 `}>
      <h1 className={`text-2xl md:text-3xl font-bold text-center ${theme?"text-gray-800":"text-gray-300"} mb-12`}>
        Work Experience
      </h1>

      {/* Timeline container */}
      <div className={`relative flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto border-1 ${theme?"border-violet-300":"border-gray-600"} sm:p-5 p-3 m-5 rounded-2xl`}>
        {/* Line for desktop (horizontal) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -z-10"></div>

        {/* Line for mobile (vertical) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300 -z-10"></div>

        {work.map((job, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center mb-5 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Circle */}
            <div className="flex sm:flex-row flex-col justify-center ">
              <div className={`sm:w-35 sm:h-35 w-30 h-30 rounded-full border-[10px] ${theme?"border-violet-600":"border-blue-500"} flex items-center justify-center bg-white shadow-md relative z-10`}>
              <div className="sm:w-28 sm:h-28 w-22 h-22 rounded-full border-[6px] border-gray-800 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700 px-2 text-center">
                  {job.year1}
                  <span className="block">to</span>
                  {job.year2}
                </span>
              </div>
            </div> 
           <div className="flex sm:items-center justify-center  sm:relative sm:left-10">
             {job.arr && <FaArrowLeftLong className="hidden sm:block bg-white shadow-lg rounded-full p-2" size={35}/>}
             <FiArrowDown className="sm:hidden mt-5 bg-white shadow-lg rounded-full p-2" size={35}/>
           </div> 
            </div>

            {/* Content */}
            <div className="mt-4 w-40">
              <h2 className={`text-sm font-bold ${theme?"text-purple-600":"text-blue-600"}`}>{job.role}</h2>
              <p className={`text-xs ${theme?"text-gray-600":"text-gray-300"}`}>{job.company}</p>
              <p className={`text-xs ${theme?"text-gray-600":"text-gray-400"}`}>{job.location}</p>
              {job.tbm && (
                <p className="text-[10px] text-gray-500">(TBM – {job.tbm})</p>
              )}
            </div>
           
          </motion.div>
          
        ))}
      </div>
      <DetailExperience/>
    </div>
  );
};

export default Workexperience;
