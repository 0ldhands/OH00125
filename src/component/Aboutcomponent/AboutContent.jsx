import React from "react";
import { motion } from "framer-motion";
import edu from '../../assets/education.png'
import working from '../../assets/working-time.png'

const AboutContent = () => {
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
      year:"Jan’2010 – Feb’2012"
    },
    {
      title: "Bachelor of Engineering (Electronics & Instrumentation Engineering)",
      subtitle: [
        "Mahendra Engineering College, Namakkal [First Class with Distinction]",
        "Anna University, Chennai",
        "Served as Student Representative Head for 6 Semesters.",
      ],
      year:"Apr’2003 – Apr’2007"
    },
  ];

  const work = [
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Specialist, Credit Analysis",
      points: [
        "Performed comprehensive credit analysis for 90+ corporate clients",
        "Prepared detailed credit reports, cash flow projections, and risk assessments",
        "Collaborated with Relationship Managers for credit evaluation",
        "Managed and monitored portfolio of 90+ clients across 10 branches",
        "Assessed risks for 40+ new credit proposals",
        "Identified opportunities for process improvements in credit analysis",
      ],
      year:"Apr’2022 – May’2023"
    },
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Branch Manager, Ambur Branch",
      points: [
        "Set up 2 ATM sites and 1 CDM site",
        "Onboarded several NTB (New-to-Bank) customers",
        "Improved branch inspection rating from C to A+ in 12 months",
        "Recovered 6 longstanding NPA accounts worth 3+ Crores",
        "Earned Star Performer recognition by canvassing an insurance policy worth 5 Lakhs",
      ],
      year:"Apr’2017 – Apr’2022"
    },
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Branch Manager, Venjuvancheri Branch",
      points: [
        "Led promotional campaigns boosting market share",
        "Grew branch portfolio to 5 Crores in 12 months",
        "Launched loans worth 1 Crore within 3 months",
        "Opened accounts for an international school and Renault Nissan division",
      ],
      year:"Aug’2015 – Apr’2017"
    },
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Assistant Manager, Kancheepuram Branch",
      points: [
        "Onboarded 2 HNI borrowers with INR 5 Crore overdraft",
        "Developed Excel macro projects for loan disbursement & cash mgmt",
        "Managed branch’s credit portfolio & renewals",
        "Secured fresh OD approvals with one-time submission",
      ],
      year:"Sep’2011 – Aug’2015 "
    },
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Clerk, T. Nagar, Chennai Branch",
      points: [
        "Onboarded 2 HNI borrowers with INR 5 Crore overdraft",
        "Created & implemented Excel project for Payroll Management",
      ],
      year:"Dec’2009 – Aug’2011"
    },
    {
      company: "IBS Software Services Pvt Ltd",
      role: "Software Engineer, Cochin",
      points: [
        "Worked as a Java Developer in iLogistics project",
        "Excelled in SQL and PL/SQL training",
      ],
      year:"Sep’2007 – Apr’200"
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-16">
     
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-6">
        Education
        <img src={edu} alt="education" className="w-8 sm:w-10 mx-5 inline-block"/>
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h3 className="text-xl font-semibold text-gray-700">{edu.title}<span className="mx-5 text-sm">{edu.year}</span></h3>
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

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mt-12 mb-6">
        Work Experience
        <img src={working} alt="working" className="w-8 sm:w-10 mx-5 inline-block"/>
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {work.map((job, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
          >
            <h2 className="text-xl font-bold text-blue-600 mb-2">{job.company} <span className="mx-5 text-sm">{job.year}</span></h2>
            <h3 className="text-lg font-semibold text-gray-700">{job.role}</h3>
            <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1">
              {job.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutContent;
