import { motion } from 'framer-motion';
import dp from "../assets/dp.jpeg";
import '../index.css'

const Profile = () => {
  return (
    <div className="flex justify-around flex-row-reverse sm:px-10 sm:flex-row sm:my-3 mt-10 mb-5" id='profile-container'>

      {/* Text Content */}
      <div className="flex items-center">
        <motion.div  
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="font-medium sm:text-4xl p-2">Hello !</h1>
          <h3 className="sm:text-2xl p-2 sm:ml-0">I am Gnana Sekar M</h3>
          <h2 className="font-medium sm:text-2xl sm:ml-0 p-2">
            Specialist- Credit Analysis
          </h2>
          <div className="sm:mt-5 mt-3 flex justify-evenly">
            <button className="bg-violet-800 text-white p-2 sm:p-3 text-sm rounded-full hover:bg-violet-500">
               <a
        href="public/Resume.pdf" 
        download="My_Resume.pdf"
      >
        Resume 
      </a>
            </button>
            <button className="bg-violet-800 text-white p-2 sm:p-3 text-sm rounded-full hover:bg-violet-500">
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
          className="rounded-full shadow-2xl shadow-violet-500 sm:w-70 w-30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default Profile;
