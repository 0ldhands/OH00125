import { motion } from "framer-motion";
import dp from "../assets/dp.jpeg";
import "../index.css";
import { Usercontext } from "../Context/Context";
import { useContext } from "react";

const Profile = () => {

  const val=useContext(Usercontext)

  const{scrollToSection}=val

  return (
    <div className="relative bg-white" id="profile-container">
      
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
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M321.39 56.44C161.48 86.14 0 46.57 0 46.57V0h1200v27.35s-136.44 55.87-321.39 29.09C713.39 29.84 489.3 27.82 321.39 56.44z"
            fill="url(#topOutsideFade)"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="flex justify-around flex-row-reverse sm:px-10 sm:flex-row sm:my-3  relative z-10 p-5 sm:p-0 ">
        
        {/* Text Content */}
        <div className="flex items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="font-medium sm:text-4xl p-2">Hello !</h1>
            <h3 className="sm:text-2xl p-2 sm:ml-0">I am <span className="font-bold">Gnana Sekar M</span></h3>
            <h2 className="font-medium sm:text-2xl sm:ml-0 p-2 text-violet-600">
              Specialist - Credit Analysis
            </h2>
            <div className="sm:mt-5 mt-3 flex justify-evenly">
              <button className="bg-violet-800 text-white p-2 sm:p-3 text-sm rounded-sm hover:bg-violet-500">
                <a href="public/Resume.pdf" download="My_Resume.pdf">
                  Resume
                </a>
              </button>
              <button className="bg-violet-800 text-white p-2 sm:p-3 text-sm rounded-sm hover:bg-violet-500" onClick={()=>scrollToSection("Projectwork")}>
                Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        {/* Profile Image */}
        <div className="flex items-center">
          <motion.img
            src={dp}
            alt="Profile Picture"
            className="rounded-full shadow-2xl shadow-violet-500 sm:w-60 w-40 p-5"
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
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path
            d="M321.39 56.44C161.48 86.14 0 46.57 0 46.57V0h1200v27.35s-136.44 55.87-321.39 29.09C713.39 29.84 489.3 27.82 321.39 56.44z"
            fill="url(#bottomOutsideFade)"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Profile;
