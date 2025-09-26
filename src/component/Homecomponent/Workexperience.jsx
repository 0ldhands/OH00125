import React from "react";
import { motion } from "framer-motion";
// import workIcon from "../../assets/working-time.png";

const WorkExperience = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

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
      year: "Apr’2022 – May’2023",
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
      year: "Apr’2017 – Apr’2022",
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
      year: "Aug’2015 – Apr’2017",
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
      year: "Sep’2011 – Aug’2015 ",
    },
    {
      company: "DBS Bank India Pvt Ltd",
      role: "Clerk, T. Nagar, Chennai Branch",
      points: [
        "Onboarded 2 HNI borrowers with INR 5 Crore overdraft",
        "Created & implemented Excel project for Payroll Management",
      ],
      year: "Dec’2009 – Aug’2011",
    },
    {
      company: "IBS Software Services Pvt Ltd",
      role: "Software Engineer, Cochin",
      points: [
        "Worked as a Java Developer in iLogistics project",
        "Excelled in SQL and PL/SQL training",
      ],
      year: "Sep’2007 – Apr’2008",
    },
  ];

  return (
    <div className="p-6 md:p-10 lg:p-16 bg-gradient-to-r m-5">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center mb-12 justify-center">
        Work Experience
        {/* <img
          src={workIcon}
          alt="work"
          className="w-8 sm:w-10 ml-3 inline-block"
        /> */}
      </h1>

      {/* Timeline Layout */}
      <div className="relative max-w-6xl mx-auto">
        {/* Middle Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-purple-300 hidden md:block"></div>

        <div className="space-y-12">
          {work.map((job, i) => (
            <motion.div
              key={i}
              className={`md:w-1/2 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-[1.02] relative ${
                i % 2 === 0
                  ? "md:ml-auto md:mr-0"
                  : "md:mr-auto md:ml-0"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
            >
              {/* Connector Dot */}
              <div
                className={`absolute top-6 w-6 h-6 bg-purple-500 rounded-full border-4 border-white hidden md:block ${
                  i % 2 === 0
                    ? "-left-3"
                    : "-right-3"
                }`}
              ></div>

              <h2 className="text-xl font-bold text-purple-600 mb-2">
                {job.company}
                <span className="ml-3 text-sm text-gray-500">{job.year}</span>
              </h2>
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
    </div>
  );
};

export default WorkExperience;  