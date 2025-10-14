import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Usercontext } from "../../Context/Context";

const Greet = () => {

  const val=useContext(Usercontext)

  const{theme,setTheme}=val
  
  const text =
    "Senior finance professional with 15+ years in banking, specializing in credit analysis, risk management, and business development, driving revenue growth and client success at DBS Bank India Ltd.";

  const words = text.split(" ");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 27) {
        
        setDisplayedText((prev) => (prev ? prev + " " + words[i] : words[i]));
        i++;
      } else {
        clearInterval(interval); // stop interval when done
      }
    }, 200); // adjust speed (ms per word)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <motion.p
        className="sm:p-3 p-5 text-center bg-violet-700 sm:m-5 mx-5 sm:my-2 my-1  sm:mt-0 sm:rounded-3xl rounded-2xl text-white text-lg leading-relaxed"
        id={theme ? "greet" : "greets"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText}
        <span className="animate-pulse ml-1">|</span>
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <FaAnglesDown size={34} className="sm:mt-0 my-2" />
      </motion.div>

      <p className="block sm:hidden  text-xl">Scroll down to see portfolio</p>
    </div>
  );
};

export default Greet;
