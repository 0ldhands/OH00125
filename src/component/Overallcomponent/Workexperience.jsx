import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiArrowDown } from "react-icons/fi";

const Workexperience = () => {
  const work = [
    {
      company: "DBS Vilas Bank",
      role: "Specialist, Credit Analysis ",
      location: "Ambur Branch",
      year: "Dec’2022 to Aug’2023",
      arr:true
    },
    {
      company: "DBS Vilas Bank",
      role: "Branch Manager",
      location: "Ambur Branch",
      year: "Apr’2017 to Apr’2022",
      arr:true
    },
     {
      company: "DBS Vilas Bank",
      role: "Branch Manager",
      location: "Venjuvancheri Branch",
      year: "Aug’2015 to Apr’2017",
      arr:true
    },
    {
      company: "DBS Vilas Bank",
      role: "Assistant Managerr",
      location: "Kancheepuram Branch ",
      year: "Sep’2011 to Aug’2015",
      arr:true
    },
    {
      company: "DBS Bank India Ltd.",
      role: "Clerk",
      location: "T. Nagar, Chennai Branch",
      year: "Dec’2009 to Aug’2011",
      arr:false
    },
  ];

  return (
    <div className="p-6 sm:p-10 bg-gradient-to-r from-gray-50 to-purple-50">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
        Work Experience
      </h1>

      {/* Timeline container */}
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto">
        {/* Line for desktop (horizontal) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -z-10"></div>

        {/* Line for mobile (vertical) */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-300 -z-10"></div>

        {work.map((job, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center mb-12 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Circle */}
            <div className="flex sm:flex-row flex-col justify-center">
              <div className="w-28 h-28 rounded-full border-[10px] border-orange-400 flex items-center justify-center bg-white shadow-md relative z-10">
              <div className="w-20 h-20 rounded-full border-[6px] border-gray-800 flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700 px-2 text-center">
                  {job.year}
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
              <h2 className="text-sm font-bold text-purple-600">{job.role}</h2>
              <p className="text-xs text-gray-600">{job.company}</p>
              <p className="text-xs text-gray-500">{job.location}</p>
              {job.tbm && (
                <p className="text-[10px] text-gray-500">(TBM – {job.tbm})</p>
              )}
            </div>
           
          </motion.div>
          
        ))}
      </div>
    </div>
  );
};

export default Workexperience;
