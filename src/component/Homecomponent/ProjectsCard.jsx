import React, { forwardRef, useContext, useState } from "react";
import { CgLoadbarDoc } from "react-icons/cg";
import ProjectImage from "../../assets/Project.jpg";
import { Usercontext } from "../../Context/Context";

const ProjectsCard = forwardRef((props, ref) => {
  const { Projects, theme } = useContext(Usercontext);
  const [showMore, setShowMore] = useState(false);

  const textTheme = "text-blue-500";

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const items = [
    { name: "Pay Bill Generation", file: "/files/paybill.xls", filename: "paybill.xls" },
    { name: "CashBook / CoinWar / Cash", file: "/files/Cashbook.xlsm", filename: "Cashbook.xlsm" },
    { name: "JDL Assist", file: "/files/JDLdata.xls", filename: "JDLdata.xls" },
  ];

  const visibleItems = showMore ? items : items.slice(0, 4);

  return (
    <div
      ref={ref || Projects}
      className={`border-1 ${
        theme ? "border-violet-200" : "border-gray-600"
      } rounded-2xl m-5 overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] 
      transition-all duration-500 ease-in-out 
       sm:max-w-[320px]`}  // 👈 Ensures same width as FunctionalAreasCard
    >
      {/* Image Section */}
      <img
        src={ProjectImage}
        alt="Project"
        className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Content Section */}
      <div className="sm:m-5 m-2">
        <h1
          className={`sm:text-2xl text-xl font-bold mt-5 mb-4 ${
            theme ? "text-violet-800" : "text-gray-300"
          }`}
        >
          Projects
        </h1>

        <ul
          className={`sm:space-y-3 space-y-2 ${
            theme ? "text-gray-700" : "text-black"
          }`}
        >
          {visibleItems.map((item, index) => (
            <li
              key={index}
              className={`group cursor-pointer p-3 rounded-lg ${
                theme
                  ? "bg-violet-50 hover:bg-violet-100"
                  : "bg-gray-500 hover:bg-gray-400"
              } hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center`}
              onClick={() => scrollToSection("Projectwork")}
            >
              <span
                className={`font-medium group-hover:${
                  theme ? "text-violet-800" : textTheme
                } transition-colors`}
              >
                {item.name}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(item.file, item.filename);
                }}
                className={`inline-flex items-center gap-1 ${
                  theme
                    ? "text-violet-700 group-hover:text-violet-900"
                    : "text-gray-300 group-hover:text-gray-900"
                } transition-all duration-300 transform group-hover:scale-110`}
              >
                <CgLoadbarDoc className="text-xl" />
                <span className="text-sm font-semibold">Download</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ProjectsCard;
