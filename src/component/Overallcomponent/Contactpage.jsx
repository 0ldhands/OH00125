import React, { useContext } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"; 
import handshake from "../../assets/handshake.png";
import { Usercontext } from "../../Context/Context";

const ContactPage = () => {
  const{theme}=useContext(Usercontext)
  return (
    <div className={`m-5 p-2 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-r ${theme?"from-indigo-500 via-purple-600 to-pink-500":"from-gray-500 via-gray-900 to-gray-500"} text-white`}>
      {/* Top wave design */}
      <svg
        className="absolute top-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="0.1"
          d="M0,64L48,69.3C96,75,192,85,288,96C384,107,480,117,576,144C672,171,768,213,864,229.3C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96V0H0Z"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-2xl mx-auto">
          I’d love to connect with you! Whether it’s about projects, work
          opportunities, or just a friendly chat, feel free to reach out.
        </p>

        <div className="grid sm:grid-cols-2 gap-10 text-left">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8 text-yellow-300" />
            <a
              href="mailto:sekar2486@gmail.com"
              className="text-lg hover:underline"
            >
              sekar2486@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <Linkedin className="w-8 h-8 text-blue-300" />
            <a
              href="https://www.linkedin.com/in/sekar2486/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline"
            >
              linkedin.com/in/sekar2486
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <Phone className="w-8 h-8 text-green-300" />
            <a href="tel:+919843938246" className="text-lg hover:underline">
              +91-9843938246
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 text-red-300" />
            <span className="text-lg">
              No. 58/110, Chamundi Street, Gugai, Salem - 636006
            </span>
          </div>
        </div>

        {/* Handshake Image */}
        <div className="flex justify-center mt-12">
          <img
            src={handshake}
            alt="handshake"
            className="w-48 drop-shadow-xl animate-bounce"
          />
        </div>
      </div>

      {/* Bottom wave design */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fillOpacity="0.1"
          d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,229.3C840,224,960,192,1080,181.3C1200,171,1320,181,1380,186.7L1440,192V320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default ContactPage;
