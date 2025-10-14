import { motion } from "framer-motion";
import dp from "../../assets/dp.jpeg";
import "../../index.css"
import { Usercontext } from "../../Context/Context";
import { useContext } from "react";

const Profile = () => {
  const val = useContext(Usercontext);
  const { scrollToSection, theme } = val;

  // Centralize theme colors
  const bgColor = theme && "white";
  const waveColor = theme ? "#7c3aed" : "#155dfc";
  const buttonColor = theme ? "bg-violet-800 hover:bg-violet-600" : "bg-blue-600 hover:bg-blue-500";

  return (
    <div
      className={`relative border-1 ${theme?" border-violet-300":"border-gray-600"} m-5 rounded-2xl p-3`}
      style={{ backgroundColor: bgColor }}
      id="profile-container"
    >
      {/* Top Outside Fade Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-28 sm:h-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="topOutsideFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor={waveColor} stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M321.39 56.44C161.48 86.14 0 46.57 0 46.57V0h1200v27.35s-136.44 55.87-321.39 29.09C713.39 29.84 489.3 27.82 321.39 56.44z"
            fill="url(#topOutsideFade)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="flex sm:justify-around items-center sm:gap-0 gap-6  flex-col-reverse sm:px-10 sm:flex-row sm:my-3 relative z-10 p-5 sm:p-0">
        {/* Text Content */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
           <div className={`sm:mx-0 mx-2 ${theme ? `text-black` : `text-gray-300`}`}>
             <h1 className="font-medium sm:text-4xl sm:p-2 sm:m-0 m-1">
              Hello !
            </h1>
            <h3 className="sm:text-2xl sm:p-2 sm:ml-0 sm:m-0 m-1">
              I am{" "}
              <span className="font-bold">
                Gnanasekar Murugaamirthan
              </span>
            </h3>
           </div>
            <h2 className={`font-medium sm:text-1xl p-2 sm:ml-0 sm:p-2 ${theme ? "text-violet-600 bg-violet-300":"text-blue-500 bg-violet-300"} sm:m-0 m-1  rounded-2xl`}>
              Full-Time Trader & Investor |Specialist- Credit Analyst | Versatile Professional with Multi-Industry
Experience
            </h2>
            <div className={`sm:mt-5 ms-2 mt-3 flex ${theme?"text-gray-500":"text-gray-300"}`}>
            <a href="">click to download <span className="underline">resume</span></a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="flex items-center">
          <motion.img
            src={dp}
            alt="Profile Picture"
            className={`rounded-full shadow-2xl ${theme ? "shadow-violet-500" : "shadow-blue-500"} sm:w-60 w-50 sm:p-5`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bottom Outside Fade Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-28 sm:h-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="bottomOutsideFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor={waveColor} stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M321.39 56.44C161.48 86.14 0 46.57 0 46.57V0h1200v27.35s-136.44 55.87-321.39 29.09C713.39 29.84 489.3 27.82 321.39 56.44z"
            fill="url(#bottomOutsideFade)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Profile;
