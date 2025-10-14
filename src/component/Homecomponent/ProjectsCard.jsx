import React, { forwardRef, useContext } from "react";
import { CgLoadbarDoc } from "react-icons/cg";
import ProjectImage from "../../assets/Project.jpg";
import { Usercontext } from "../../Context/Context";
import LazyLoad from "react-lazyload";

const ProjectsCard = forwardRef((props, ref) => {
  const { Projects } = useContext(Usercontext);

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

  return (
    <div
      ref={ref || Projects}
      className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out"
    >
      {/* Image Section */}
      <LazyLoad height={200} offset={100}>
        <img
          src={ProjectImage}
          alt="Project"
          className="w-full h-64 object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
        />
      </LazyLoad>

      {/* Content Section */}
      <div className="sm:m-5 m-2">
        <h1 className="sm:text-2xl text-xl font-bold text-violet-800 mt-5 mb-4">
          Projects
        </h1>

        <ul className="space-y-4 text-gray-700">
          {/* Pay Bill Generation */}
          <li
            className="group cursor-pointer p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center"
            onClick={() => scrollToSection("Projectwork")}
          >
            <span className="font-medium group-hover:text-violet-800 transition-colors">
              Pay Bill Generation
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload("/files/paybill.xls", "paybill.xls");
              }}
              className="inline-flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-all duration-300 transform group-hover:scale-110"
            >
              <CgLoadbarDoc className="text-xl" />
              <span className="text-sm font-semibold">Download</span>
            </button>
          </li>

          {/* CashBook/CoinWar/Cash */}
          <li
            className="group cursor-pointer p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center"
            onClick={() => scrollToSection("Projectwork")}
          >
            <span className="font-medium group-hover:text-violet-800 transition-colors">
              CashBook / CoinWar / Cash
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload("/files/Cashbook.xlsm", "Cashbook.xlsm");
              }}
              className="inline-flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-all duration-300 transform group-hover:scale-110"
            >
              <CgLoadbarDoc className="text-xl" />
              <span className="text-sm font-semibold">Download</span>
            </button>
          </li>

          {/* JDL Assist */}
          <li
            className="group cursor-pointer p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center"
            onClick={() => scrollToSection("Projectwork")}
          >
            <span className="font-medium group-hover:text-violet-800 transition-colors">
              JDL Assist
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload("/files/JDLdata.xls", "JDLdata.xls");
              }}
              className="inline-flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-all duration-300 transform group-hover:scale-110"
            >
              <CgLoadbarDoc className="text-xl" />
              <span className="text-sm font-semibold">Download</span>
            </button>
          </li>

          {/* NLD Ledger */}
          <li
            className="group cursor-pointer p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center"
            onClick={() => scrollToSection("Projectwork")}
          >
            <span className="font-medium group-hover:text-violet-800 transition-colors">
              NLD Ledger
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload("/files/JDLproucher.xlsm", "JDLproucher.xlsm");
              }}
              className="inline-flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-all duration-300 transform group-hover:scale-110"
            >
              <CgLoadbarDoc className="text-xl" />
              <span className="text-sm font-semibold">Download</span>
            </button>
          </li>

          {/* Project details (extra item) */}
          <li className="group cursor-pointer p-3 rounded-lg bg-violet-50 hover:bg-violet-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 flex justify-between items-center">
            <span className="font-medium group-hover:text-violet-800 transition-colors">
              Project Details
            </span>
            <button
              className="inline-flex items-center gap-1 text-violet-700 group-hover:text-violet-900 transition-all duration-300 transform group-hover:scale-110"
            >
              <CgLoadbarDoc className="text-xl" />
              <span className="text-sm font-semibold">View</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ProjectsCard;