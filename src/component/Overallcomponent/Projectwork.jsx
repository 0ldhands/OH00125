import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Usercontext } from "../../Context/Context";
import cashbook from "../../assets/project/cashbook.gif";
import jdlassist from "../../assets/project/jdlassist.gif";
import paybill from "../../assets/project/paybill.gif";
import projecthoriz from "../../assets/prohoriz.jpg";

// =====================
// 📁 Project Data
// =====================
const projectData = [
  {
    title: "Pay Bill Generation",
    image: paybill,
    description: [
      "During the early period of my career, although computers were used for posting vouchers, the paybill calculation was still done manually. One staff member would spend an entire day completing the calculation and preparing vouchers.",
      "When this work was assigned to me, I created a ledger in Excel that automatically generated vouchers by populating data from the main sheet. The vouchers could then be printed and used directly, reducing one full day’s work to just one hour.",
      "This solution remained in use for 2–3 years until the process was fully automated through the banking system.",
      "(Excel file attached)",
    ],
  },
  {
    title: "Cash Book",
    image: cashbook,
    description: [
      "While serving as Assistant Manager at the Kancheepuram branch, we relied on manual cash chittas for recording receipts and payments. Identifying mismatches was time-consuming, as handwritten ledgers made error tracking difficult.",
      "I developed an Excel tool to capture receipts and payments along with denominations, making it easy to identify shortages or excess amounts, and even pinpoint the specific denomination. In addition, I built tools for denomination checking, coin war, and cash ledger automation.",
      "A key challenge was converting numbers to words, since Excel lacked this feature. I solved this by writing a VBA script for number-to-words conversion.",
      "This Cash Book solution was successfully used for almost 8 years. Even after the banking software was upgraded to handle denomination entries, the tool continued to support other operational tasks.",
    ],
  },
  {
    title: "JDL Assist",
    image: jdlassist,
    description: [
      "At the Kancheepuram branch, which was a heavy jewel loan branch, we processed 60–70 jewel loans daily (sometimes up to 100 on peak days). Each loan required manual preparation of multiple vouchers—loan creation, fund transfer, appraiser commission, bank commission—as well as manual creation of jewel packet labels.",
      "To streamline this, I developed an Excel solution where, once basic data was entered, all required vouchers were automatically generated with a single click. Label creation was handled using a mail merge technique, enabling bulk printing of labels for jewel packets.",
      "This automation reduced the workload by nearly 90%, allowing staff to focus on other important tasks.",
    ],
  },
];

// =====================
// 💠 Project Card Component
// =====================
const ProjectCard = ({ index, title, description, image, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const { theme } = useContext(Usercontext);

  return (
    <motion.article
      className={`p-6 ${
        theme ? "bg-white/90" : "bg-gray-600"
      } rounded-xl shadow-md backdrop-blur-sm transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Image Section */}
      {image && (
        <div
          role="button"
          tabIndex={0}
          className="relative group cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
          />
          <span
            className={`absolute bottom-2 right-2 ${
              theme ? "bg-violet-700" : "bg-blue-600"
            } text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            Click to view
          </span>
        </div>
      )}

      {/* Title */}
      <h2
        className={`text-xl font-semibold mb-2 ${
          theme ? "text-gray-800" : "text-gray-100"
        }`}
      >
        {title}
      </h2>

      {/* Description */}
      <div className={expanded ? "space-y-2" : "line-clamp-2"}>
        {description.map((para, i) => (
          <p
            key={i}
            className={`${theme ? "text-gray-700" : "text-gray-300"} mb-2 leading-relaxed`}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Show More / Less button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`mt-2 text-sm rounded-sm cursor-pointer ${
          theme
            ? "text-violet-700 hover:text-violet-400"
            : "text-blue-300 hover:text-blue-400"
        } font-medium focus:outline-none hover:underline`}
      >
        {expanded ? "Show Less" : "Show More"}
      </button>
    </motion.article>
  );
};

// =====================
// 🌈 Main Projects Component
// =====================
const Projects = () => {
  const val = useContext(Usercontext);
  const { Projectwork, theme } = val;

  // For modal image view
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <div className="min-h-screen py-10 px-4" ref={Projectwork}>
      <motion.div
        className={`max-w-6xl mx-auto p-6 rounded-2xl shadow-xl ${
          theme ? "bg-violet-300" : "bg-gray-500"
        } backdrop-blur-lg space-y-6`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header */}
        <h1
          className={`text-2xl font-bold text-center mb-6 ${
            theme ? "text-gray-800" : "text-gray-100"
          }`}
        >
          Excel Projects and Innovations
        </h1>

        {/* Optional banner image */}
        <img
          src={projecthoriz}
          alt="Excel Projects Banner"
          className="w-full max-h-60 object-cover rounded-2xl shadow-lg mb-8"
        />

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {/* Additional Contributions */}
        <motion.article
          className={`p-6 rounded-xl shadow-md ${
            theme ? "bg-white/90 text-gray-700" : "bg-gray-600 text-gray-300"
          } backdrop-blur-sm transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2
            className={`text-xl font-semibold mb-2 ${
              theme ? "text-gray-800" : "text-gray-100"
            }`}
          >
            Note :
          </h2>
          <p className="leading-relaxed">
            All of the above Excel projects were entirely self-initiated and
            served as highly effective tools in daily operations. They not only
            improved efficiency but also earned appreciation from higher
            management. Beyond these, I implemented several smaller process
            improvements that added value to routine work.
          </p>
        </motion.article>
      </motion.div>

      {/* =====================
          🖼️ Modal Image Viewer
      ===================== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full Preview"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
