import React, { useContext } from "react";
import { motion } from "framer-motion";
import Anna from "../../assets/Educationlogo/anna.png"
import mahendra from "../../assets/Educationlogo/mahendra.png"
import { Usercontext } from "../../Context/Context";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const education = [
  {
    title: "Master of Business Administration (Financial Management Services)",
    subtitle: "Anna University, Chennai [First Class]",
    year: "Jan’2010 – Feb’2012",
    image:Anna
  },
  {
    title:
      "Bachelor of Engineering (Electronics & Instrumentation Engineering)",
    subtitle: [
      "Mahendra Engineering College, Namakkal [First Class with Distinction]",
      "Anna University, Chennai",
      "Served as Student Representative Head for 6 Semesters.",
    ],
    year: "Apr’2003 – Apr’2007",
    image:mahendra
  },
];

const Edu = () => {

  const {theme,setTheme}=useContext(Usercontext)

  return (
    <section className="min-h-screen py-12 px-5 bg-gradient-to-br from-violet-200 via-violet-900 to-violet-200">
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        🎓 My Education
        <span className="block w-32 h-1 bg-gradient-to-r from-violet-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>
      </motion.h1>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg bg-white/80 backdrop-blur-lg border border-violet-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative p-6">
              <div className="flex justify-center">
                <img src={edu.image} alt={edu.title} className="w-70 h-50"/>
              </div>
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-2"
                whileHover={{ color: "#5B21B6" }}
              >
                {edu.title}
              </motion.h3>
              <motion.span
                className="block text-sm font-medium text-indigo-600 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {edu.year}
              </motion.span>

              {Array.isArray(edu.subtitle) ? (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {edu.subtitle.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{edu.subtitle}</p>
              )}
            </div>

            {/* Glow effect */}
            <motion.div
              className="absolute -bottom-5 -right-5 w-24 h-24 bg-violet-500 rounded-full opacity-30 blur-2xl"
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Edu;
