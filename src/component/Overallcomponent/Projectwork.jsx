import React, { forwardRef, useContext, useState } from "react";
import { motion } from "framer-motion";
import { Usercontext } from "../../Context/Context";


const projectData = [
  {
    title: "Pay Bill Generation",
    description: [
      "During the early period of my career, although computers were used for posting vouchers, the paybill calculation was still done manually. One staff member would spend an entire day completing the calculation and preparing vouchers.",
      "When this work was assigned to me, I created a ledger in Excel that automatically generated vouchers by populating data from the main sheet. The vouchers could then be printed and used directly, reducing one full day’s work to just one hour.",
      "This solution remained in use for 2–3 years until the process was fully automated through the banking system.",
      "(Excel file attached)",
    ],
  },
  {
    title: "Cash Book / CoinWar / Cash Ledger",
    description: [
      "While serving as Assistant Manager at the Kancheepuram branch, we relied on manual cash chittas for recording receipts and payments. Identifying mismatches was time-consuming, as handwritten ledgers made error tracking difficult.",
      "I developed an Excel tool to capture receipts and payments along with denominations, making it easy to identify shortages or excess amounts, and even pinpoint the specific denomination. In addition, I built tools for denomination checking, coin war, and cash ledger automation.",
      "A key challenge was converting numbers to words, since Excel lacked this feature. I solved this by writing a VBA script for number-to-words conversion.",
      "This Cash Book solution was successfully used for almost 8 years. Even after the banking software was upgraded to handle denomination entries, the tool continued to support other operational tasks.",
      ,
    ],
  },
  {
    title: "JDL Assist",
    description: [
      "At the Kancheepuram branch, which was a heavy jewel loan branch, we processed 60–70 jewel loans daily (sometimes up to 100 on peak days). Each loan required manual preparation of multiple vouchers—loan creation, fund transfer, appraiser commission, bank commission—as well as manual creation of jewel packet labels.",
      "To streamline this, I developed an Excel solution where, once basic data was entered, all required vouchers were automatically generated with a single click. Label creation was handled using a mail merge technique, enabling bulk printing of labels for jewel packets.",
      "This automation reduced the workload by nearly 90%, allowing staff to focus on other important tasks.",
      ,
    ],
  },
  {
    title: "NLD Ledger",
    description: [
      "I created this solution for Nithya Lakshmi Deposits (NLD), one of the oldest deposit products still maintained manually despite computerization. Daily collections involved 200–300 entries, and tallying was often postponed until weekends due to the heavy workload.",
      "The Excel file I developed enabled daily tallying within 15–20 minutes, significantly reducing weekend workload and improving operational efficiency.",
      ,
    ],
  },
];

const ProjectCard = ({ index, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  
  return (
    <motion.article
      className="p-6 rounded-xl shadow-md bg-white/90 backdrop-blur-sm transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-2">
         {title}
      </h2>

      {/* Show only 2 lines by default */}
      <div className={expanded ? "space-y-2" : "line-clamp-2"}>
        {description.map((para, i) => (
          <p key={i} className="text-gray-700 mb-2">
            {para}
          </p>
        ))}
      </div>

      {/* Show More / Less button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 p-1 text-sm rounded-sm cursor-pointer text-violet-700 font-medium focus:outline-none"
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </motion.article>
  );
};

const Projects =() => {

  const val=useContext(Usercontext)

  const{Projectwork}=val

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4"  ref={Projectwork}>
      <motion.div
        className="max-w-6xl mx-auto p-6 rounded-2xl shadow-xl bg-violet-300 backdrop-blur-lg space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Excel Projects and Innovations
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {projectData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>

        {/* 4th project below */}
        <ProjectCard index={3} {...projectData[3]} />

        {/* Additional Contributions */}
        <motion.article
          className="p-6 rounded-xl shadow-md bg-white/90 backdrop-blur-sm transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-2">Additional Contributions</h2>
          <p className="text-gray-700">
            All of the above Excel projects were entirely self-initiated and
            served as highly effective tools in daily operations. They not only
            improved efficiency but also earned appreciation from higher
            management. Beyond these, I implemented several smaller process
            improvements that added value to routine work.
          </p>
        </motion.article>
      </motion.div>
    </div>
  );
};

export default Projects;
