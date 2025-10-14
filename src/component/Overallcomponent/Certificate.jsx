import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdCancel } from "react-icons/md";
import { Usercontext } from "../../Context/Context";

// Import certificate images
import certificate3 from "../../assets/certificate/certificate3.jpeg";
import certificate4 from "../../assets/certificate/certificate4.jpeg";
import certificate5 from "../../assets/certificate/certificate5.jpeg";
import certificate6 from "../../assets/certificate/certificate6.jpeg";
import certificate7 from "../../assets/certificate/certificate7.jpeg";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Customer Service & Banking Codes and Standards",
    img: certificate6,
    desc: "Focuses on delivering superior customer service while adhering to established banking codes and ethical standards.",
  },
  {
    id: 2,
    title: "Certificate Course in Digital Banking",
    img: certificate7,
    desc: "Covers digital banking concepts, technologies, and customer engagement strategies in the modern banking ecosystem.",
  },
  {
    id: 3,
    title: "Certified Associate of IIBF (C.A.I.I.B)",
    img: certificate4,
    desc: "Advanced professional certification enhancing knowledge in financial management, risk management, and advanced banking operations.",
  },
  {
    id: 4,
    title: "Anti-money Laundering & Know your Customer (IIBF)",
    img: certificate5,
    desc: "Focuses on compliance regulations, KYC norms, and AML procedures essential for risk-free banking operations.",
  },
  {
    id: 5,
    title: "Prevention of Cyber Crime and Fraud Management (IIBF)",
    img: certificate5,
    desc: "Provides insights into cybersecurity, fraud detection, and digital safety measures in the banking sector.",
  },
  {
    id: 6,
    title: "Junior Associate of IIBF (J.A.I.I.B)",
    img: certificate3,
    desc: "Fundamental certification covering essential banking principles, accounting, and customer relationship management.",
  },
];

export default function CertificationsShowcase() {
  const val = useContext(Usercontext);
  const { Certifications, theme } = val || {};
  const [selectedImage, setSelectedImage] = useState(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={Certifications}
      className="py-12 px-4 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Header */}
      <motion.header
        className="mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl font-bold ${theme?"text-slate-800":"text-gray-200"} mb-2`}>
          Certifications & Courses
        </h2>
        <p className={`${theme?"text-slate-500":"text-slate-400"} max-w-2xl mx-auto`}>
          A curated collection of certifications in digital banking, customer
          service, and compliance — showcasing professional growth and expertise.
        </p>
      </motion.header>

      {/* Animated Card Grid */}
      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.id}
            variants={cardVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 120 }}
            className={`relative ${theme?"bg-white":"bg-gray-400"} rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedImage(cert)}
          >
            <motion.img
              src={cert.img}
              alt={cert.title}
              className="w-full h-56 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-5">
              <motion.h3
                className="text-lg font-semibold text-slate-800 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p
                className="text-sm text-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {cert.desc}
              </motion.p>
              <motion.button
                className={`mt-4 px-3 py-1.5 text-sm text-white ${theme?"bg-violet-600 hover:bg-violet-500":"bg-blue-500 hover:bg-blue-400"}  rounded-md`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative"
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <MdCancel size={35} />
              </button>
              <motion.img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.p
                className="text-center text-white mt-4 text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedImage.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
