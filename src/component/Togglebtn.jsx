import { motion } from "framer-motion";
import { useContext } from "react";
import { Usercontext } from "../Context/Context";

const Togglebtn = () => {
  const { theme, setTheme } = useContext(Usercontext);

  return (
    <div
      onClick={() => setTheme((cur) => !cur)}
      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
        theme ? "bg-gray-400" : "bg-black"
      }`}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        // 👇 move the knob right when theme = true
        animate={{
          x: theme ? 24 : 0, // 24px to right
        }}
      />
    </div>
  );
};

export default Togglebtn;
