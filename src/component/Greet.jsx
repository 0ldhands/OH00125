import { FaAnglesDown } from "react-icons/fa6";
import {motion} from 'framer-motion'

const Greet = () => {
  return (
    <div className="flex flex-col items-center ">
      <p className="p-5 align-text-center bg-violet-700 sm:mb-4 sm:m-2 m-5 mt-10 sm:rounded-3xl rounded-2xl" id="greet">
        Senior finance professional with 15+ years in banking, specializing in
        credit analysis, risk management, and business development, driving
        revenue growth and client success at DBS Bank India Ltd.
      </p>
       <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <FaAnglesDown size={34} className="sm:mt-0 mt-5" />
    </motion.div>
     <p className="block sm:hidden mt-5 text-xl" >Scroll down to see portfolio</p>
    </div>
  );
};

export default Greet;
