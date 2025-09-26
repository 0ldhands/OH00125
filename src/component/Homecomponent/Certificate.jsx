import { useContext, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import certificate1 from "../../assets/certificate/certificate1.jpeg"
import certificate2 from "../../assets/certificate/certificate2.jpeg"
import certificate3 from "../../assets/certificate/certificate3.jpeg"
import certificate4 from "../../assets/certificate/certificate4.jpeg"
import certificate5 from "../../assets/certificate/certificate5.jpeg"
import certificate6 from "../../assets/certificate/certificate6.jpeg"
import certificate7 from "../../assets/certificate/certificate7.jpeg"
import { Usercontext } from "../../Context/Context";

const certificates = [
  { id: 1, title: "Bachelor of Engineering", img:certificate1 },
  { id: 2, title: "Master of Business Administration", img: certificate2 },
  { id: 3, title: "JAIIB", img: certificate3 },
  { id: 4, title: "CAIIB", img: certificate4 },
  { id: 5, title: "prevention of cyber crimes & fraud management", img: certificate5 },
  { id: 6, title: "customer service & banking codes and standards", img: certificate6 },
  { id: 7, title: "certificate course in digital banking", img: certificate7 },
];

const Certificate = () => {
  const [current, setCurrent] = useState(0);

  const val=useContext(Usercontext)

  const{Certifications}=val

  // Auto change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section className="my-5 py-10 bg-gray-400" ref={Certifications}>
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        My Certificates
      </h2>

      <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 bg-black bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-70 transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Slides */}
        <div className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex justify-center"
            >
              <div
                className={`flex justify-center relative w-80 sm:w-80 h-100 sm:h-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-700 ${
                  index === current
                    ? "scale-105 opacity-100 z-20"
                    : "scale-90 opacity-70"
                }`}
              >
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-80 h-100 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-4  text-sm">
                  {cert.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 bg-black bg-opacity-40 p-2 rounded-full text-white hover:bg-opacity-70 transition"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Certificate;
