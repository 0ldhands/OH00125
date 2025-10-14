import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../index.css"
import coin from "../../assets/Hobbies/coins.jpeg"
import badminton from "../../assets/Hobbies/badminton.jpeg"
import library from "../../assets/Hobbies/library.jpeg"

const hobbies = [
  {
    name: "Collecting old coins",
    img: coin,
    details:
      "I enjoy collecting rare and historical coins — each one tells a story from a different time and place",
  },
  {
    name: "Playing badminton",
    img: badminton,
    details:
      "I love playing badminton — it keeps me active, sharp, and motivated through every rally and match.",
  },
  {
    name: "Reading books",
    img: library,
    details:
      "Reading tech blogs and mystery novels helps me relax and stay informed.",
  },
  {
    name: "Traveling",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    details:
      "Exploring new cultures, cuisines, and landscapes inspires my creativity.",
  },
];

const HobbyCard = ({ hobby }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        animate={{ rotateY: flipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg backface-hidden">
          <img
            src={hobby.img}
            alt={hobby.name}
            className="w-full h-40 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              {hobby.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">(click to see more)</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl rotateY-180 backface-hidden flex items-center justify-center p-4">
          <p className="text-center text-base">{hobby.details}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HobbiesSection = () => {
  return (
    <section className="py-16 " id="hobbies">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          My <span className="text-blue-600">Hobbies</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, i) => (
            <HobbyCard hobby={hobby} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
