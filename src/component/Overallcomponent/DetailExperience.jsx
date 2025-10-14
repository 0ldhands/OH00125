import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, Star, Database } from "lucide-react";
import dbs from "../../assets/dbs.png"
import banking from "../../assets/banking.jpg"
import { Usercontext } from "../../Context/Context";

// Default export: ResumeComponent
// TailwindCSS is used for styling (no import needed in this file).
// Framer Motion handles animations. lucide-react provides simple icons.

const roles = [
  {
    company: "DBS Bank India Pvt Ltd",
    period: "Apr 2017 – May 2023",
    logo:true,
    positions: [
      {
        title: "Specialist, Credit Analysis",
        dates: "Apr 2022 – May 2023",
        bullets: [
          "Performed comprehensive credit analysis for 90+ corporate clients to assess creditworthiness and financial stability.",
          "Prepared detailed credit reports: financial statements analysis, cash flow projections, and risk assessment for lending decisions.",
          "Collaborated with Relationship Managers and stakeholders to gather information for credit evaluation.",
          "Managed and monitored credit portfolio of 90+ clients across 10 branches to identify risks and recommend actions.",
          "Assessed credit risks for 40+ new credit proposals and provided mitigation insights.",
          "Identified process improvements and implemented credit analysis enhancements to streamline workflows.",
        ],
      },
      {
        title: "Branch Manager — Ambur Branch",
        dates: "Apr 2017 – Apr 2022",
        bullets: [
          "Spearheaded setup of 2 ATM sites and 1 CDM site to enhance customer service.",
          "Stabilized a declining portfolio and onboarded several NTB (New-to-Bank) customers, driving growth.",
          "Elevated branch inspection rating from C to A+ within 12 months through strategic improvements.",
          "Recovered and closed 6 longstanding NPA accounts (Worth 3+ Crores) within 1.6 years.",
          "Earned Star Performer recognition in TPP contest by canvassing an insurance policy with a premium of 5 Lakhs.",
        ],
      },
      {
        title: "Branch Manager — Venjuvancheri Branch",
        dates: "Aug 2015 – Apr 2017",
        bullets: [
          "Led promotional campaigns, including auto advertisements, increasing local market share.",
          "Grew the new branch portfolio to 5 Crores within 12 months.",
          "Launched CCOD loans, mortgage loans, and commercial vehicle loans worth Rs 1 Crore within 3 months of opening.",
          "Opened international school account and salary accounts for Renault Nissan division through negotiation.",
        ],
      },
      {
        title: "Assistant Manager — Kancheepuram Branch",
        dates: "Sep 2011 – Aug 2015",
        bullets: [
          "Onboarded 2 HNI borrowers and facilitated disbursement of an INR 5 Crore overdraft facility.",
          "Developed 2 MS Excel macro-based projects for jewel loan disbursement and cash management.",
          "Managed branch credit portfolio and ensured timely renewal of overdraft facilities.",
          "Secured approvals for fresh OD facilities with one-time submissions.",
        ],
      },
      {
        title: "Clerk — T. Nagar, Chennai Branch",
        dates: "Dec 2009 – Aug 2011",
        bullets: [
          "Onboarded 2 HNI borrowers and assisted with INR 5 Crore OD disbursement.",
          "Created MS Excel project for payroll management and implemented it at the branch.",
        ],
      },
    ],
  },
  {
    company: "IBS Software Services Pvt Ltd",
    period: "Sep 2007 – Apr 2009",
    logo:false,
    positions: [
      {
        title: "Software Engineer — Cochin",
        dates: "Sep 2007 – Apr 2009",
        bullets: [
          "Worked as a Java Developer on the iLogistics project.",
          "Demonstrated strong proficiency during SQL and PL/SQL training sessions.",
        ],
      },
    ],
  },
];

export default function DetailExperience() {
  const [openIndex, setOpenIndex] = useState(0);

  const{theme}=useContext(Usercontext)

  return (
    <div className={`min-h-screen ${theme?"bg-violet-200":"bg-gray-500"} sm:mt-10 sm:p-10 flex items-start justify-center rounded-2xl`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-5xl w-full grid gap-6 grid-cols-1 lg:grid-cols-3"
        aria-live="polite"
      >
        {/* Left column: Summary card */}
        <aside className={`lg:col-span-1 ${theme?"bg-white":"bg-gray-600"} p-6 rounded-2xl shadow-md border border-gray-100`}>
          <div className="flex flex-col items-center gap-4">
            <div>
               <img src={banking} alt="banking" className="rounded-2xl" />
            </div>
           
            <div>
                 <div className={`p-3 ${theme?"bg-indigo-50":"bg-gray-500"} rounded-xl flex justify-evenly`}>
              <Briefcase className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Career Snapshot</h2>
            </div>
              
              <p className="text-sm text-gray-500 mt-1">10+ years in banking & finance, credit analysis, branch management, and software engineering background.</p>
            </div>
          </div>

          <div className={`mt-6 space-y-3 ${theme?"text-gray-600":"text-gray-900"}`}>
            <div className="flex items-center text-sm  gap-2">
              <Calendar className="h-4 w-4" />
              <span>Open to roles in Credit, Risk & Branch Leadership</span>
            </div>

            <div className="flex items-center text-sm  gap-2">
              <Database className="h-4 w-4" />
              <span>Tools: MS Excel (macros), PL/SQL, financial modelling</span>
            </div>

            <div className="mt-4 text-sm">
              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Highlights</span>
              <ul className="mt-3 ml-4 list-disc ">
                <li>Managed portfolios of 90+ clients.</li>
                <li>Recovered NPAs worth 3+ Crores.</li>
                <li>Built Excel macro tools for branch operations.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => window.print()}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-transparent bg-violet-600 text-white font-medium hover:bg-violet-500 transition"
            >
              <Star className="h-4 w-4" />
              Print / Export
            </button>  
          </div>
          
        </aside>

        {/* Right column: Timeline / roles */}
        <main className="lg:col-span-2 border-1 border-gray-300 p-5 rounded-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 }}
            className="text-2xl font-semibold mb-4"
          >
            Professional Experience
          </motion.h1>

          <div className="space-y-6">
            {roles.map((company, cIdx) => (
              <section key={company.company} className={`${theme?"bg-white border-gray-100":"bg-gray-600 border-gray-500"} rounded-2xl shadow-sm border  overflow-hidden`}>
                <div className="flex items-center justify-between px-5 py-4 sm:px-6">
                  <div>
                    <p className="text-sm text-gray-500">{company.period}</p>
                    <h2 className="text-lg font-semibold">{company.company}{company.logo && <img src={dbs} alt={company.company} className="w-20 inline-block ms-5"/>}</h2>
                    
                  </div>
                </div> 

                <div className="divide-y divide-gray-100">
                  {company.positions.map((pos, pIdx) => {
                    const idx = `${cIdx}-${pIdx}`;
                    const isOpen = openIndex === idx;

                    return (
                      <div key={pos.title} className="px-5 py-4 sm:px-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-md font-medium">{pos.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{pos.dates}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setOpenIndex(isOpen ? null : idx)}
                              aria-expanded={isOpen}
                              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg  ${theme?"bg-white hover:bg-gray-50 border border-gray-200":"bg-gray-500 hover:bg-gray-400"} transition focus:outline-none`}
                            >
                              <span className="text-sm">{isOpen ? "Collapse" : "View"}</span>
                            </button>
                          </div>
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.28 }}
                              className="mt-3 overflow-hidden"
                            >
                              <ul className={`list-disc ml-5 space-y-2 ${theme?"text-gray-700":"text-gray-900"}`}>
                                {pos.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Mobile CTA: expand first item by default */}
          <div className="mt-6 text-sm text-gray-700">Tip: Click "View" on any role to expand details. The component is responsive and animates on open/close.</div>
        </main>
      </motion.div>
    </div>
  );
}
