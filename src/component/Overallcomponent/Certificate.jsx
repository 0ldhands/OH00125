import { useState, useContext } from "react";
import certificate1 from "../../assets/certificate/certificate1.jpeg";
import certificate2 from "../../assets/certificate/certificate2.jpeg";
import certificate3 from "../../assets/certificate/certificate3.jpeg";
import certificate4 from "../../assets/certificate/certificate4.jpeg";
import certificate5 from "../../assets/certificate/certificate5.jpeg";
import certificate6 from "../../assets/certificate/certificate6.jpeg";
import certificate7 from "../../assets/certificate/certificate7.jpeg";
import { Usercontext } from "../../Context/Context";
import { MdCancel } from "react-icons/md";


const certificates = [
  { id: 1, title: "Bachelor of Engineering", img: certificate1 },
  { id: 2, title: "Master of Business Administration", img: certificate2 },
  { id: 3, title: "JAIIB", img: certificate3 },
  { id: 4, title: "CAIIB", img: certificate4 },
  { id: 5, title: "Prevention of cyber crimes & fraud management", img: certificate5 },
  { id: 6, title: "Customer service & banking codes and standards", img: certificate6 },
  { id: 7, title: "Certificate course in digital banking", img: certificate7 },
];

const Certificate = () => {
  const val = useContext(Usercontext);
  const { Certifications } = val;

  const [selected, setSelected] = useState(null); 

  return (
    <section className="my-5 py-10" ref={Certifications}>
      <h2 className="text-2xl font-bold text-center mb-6 text-black">
        My Certificates
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className={`relative rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-500 ${
              selected ? "opacity-30" : "opacity-100 hover:scale-105"
            }`}
            onClick={() => setSelected(cert)}
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-sm">
              {cert.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="text-gray-400 relative left-100 bottom-65 cursor-pointer"><MdCancel size={25}/></div>
          <img
            src={selected.img}
            alt={selected.title}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Certificate;
