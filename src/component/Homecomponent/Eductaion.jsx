// src/component/Homecomponent/EducationSection.jsx
import React from "react";
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const education = [
  {
    title: "Master of Business Administration (Financial Management Services)",
    subtitle: "Anna University, Chennai [First Class]",
    year: "Jan’2010 – Feb’2012",
  },
  {
    title: "Bachelor of Engineering (Electronics & Instrumentation Engineering)",
    subtitle: [
      "Mahendra Engineering College, Namakkal [First Class with Distinction]",
      "Anna University, Chennai",
      "Served as Student Representative Head for 6 Semesters.",
    ],
    year: "Apr’2003 – Apr’2007",
  },
];

const Education = () => {
  return (
    <section className="p-2 sm:p-5 bg-gradient-to-br  m-5">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center border-b-3 border-violet-700 pb-2 mb-6">
        Education
        {/* <img src={edu} alt="education" className="w-8 sm:w-10 ml-4" /> */}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => ( 
          <motion.div
            key={i}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow border-l-30 border-violet-700"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              {edu.title}
              <span className="block text-sm text-blue-600">{edu.year}</span>
            </h3>
            {Array.isArray(edu.subtitle) ? (
              <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1">
                {edu.subtitle.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600 mt-3">{edu.subtitle}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
