import { motion } from "framer-motion";
import { useContext, useState } from "react";
import word from "../../assets/icons/word.png";
import excel from "../../assets/icons/excel.png";
import powerbi from "../../assets/icons/powerbi.png";
import sql from "../../assets/icons/database.png";
import "../../index.css";
import LazyLoad from "react-lazyload";
import powerpoint from "../../assets/powerpoint.png"
import { Usercontext } from "../../Context/Context";

const skills = [
  { name: "Word", img: word, spec: "Microsoft Word — Document Creation & Editing" },
  { name: "Excel", img: excel, spec: "Microsoft Excel — Data Analysis & Formulas" },
  { name: "Power BI", img: powerbi, spec: "Power BI — Data Visualization & Dashboards" },
  { name: "MySQL", img: sql, spec: "MySQL — Database Design & Queries" },
  { name: "Power point", img: powerpoint, spec: "Power point — Data presentation" },
];

// Card Component
const SkillCard = ({ skill, index }) => {
  const [hovered, setHovered] = useState(false);

  const {theme}=useContext(Usercontext)

  return (
    <motion.div
      className={`relative flex flex-col ${theme ? "bg-violet-600/80":"bg-gray-600/80"} items-center  rounded-xl p-4 shadow-md hover:shadow-violet-400/50 cursor-pointer backdrop-blur-sm transition-transform duration-300 hover:scale-110 hover:-translate-y-2`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <LazyLoad height={200} offset={100}>
        <motion.img
        src={skill.img}
        alt={skill.name}
        loading="lazy"
        className="sm:w-20 w-14 mb-3 select-none drop-shadow-lg"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      </LazyLoad>
      <h1 className="text-center text-white text-sm sm:text-base font-semibold tracking-wide">
        {skill.name}
      </h1>

      {hovered && (
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs text-center rounded-md px-2 py-1 shadow-lg w-44"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {skill.spec}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function Skill() {
  const{theme,setTheme}=useContext(Usercontext)
  return (
    <div className="relative sm:m-6 m-4 rounded-2xl overflow-hidden">
      {/* Animated Gradient Wave Background */}
      <div className={`absolute inset-0 ${theme ? "wave-bg" : "wave-bgb"} opacity-95`}></div>
      {/* Content Section */}
      <div className="relative z-10 sm:p-8 p-5 backdrop-blur-md rounded-2xl shadow-2xl">
        <motion.h1
          className={`text-3xl sm:text-4xl font-bold text-center ${theme?"text-white":"text-gray-900"} mb-10 drop-shadow-[0_2px_8px_rgba(167,139,250,0.7)]`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
