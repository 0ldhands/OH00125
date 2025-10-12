import React, { forwardRef, useContext } from "react";
import { CgLoadbarDoc } from "react-icons/cg";
import Project from "../../assets/Project.jpg"
import { Usercontext } from "../../Context/Context";
import LazyLoad from "react-lazyload";

const ProjectsCard = forwardRef(() => {

  const {Projects}=useContext(Usercontext)

  return (
    <div
      className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden"
      ref={Projects}
    >
      <LazyLoad height={200} offset={100}>
        <img
        src={Project}
        alt="project"
        className="w-full h-64 object-cover object-top"
      />
      </LazyLoad>
      
      <div className="sm:m-5 m-1">
        <h1 className="sm:text-2xl mb-4 text-2xl font-bold text-violet-800 mt-5">
          Project
        </h1>
        <ul className="space-y-3 text-gray-700">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("Projectwork")}
          >
            Pay Bill Generation
            <a
              className="inline-block"
              href="public/files/paybill.xls"
              download="paybill.xls"
            >
              <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" />{" "}
              <span className="text-violet-800 text-sm">link</span>
            </a>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("Projectwork")}
          >
            CashBook/CoinWar/Cash
            <a
              className="inline-block"
              href="public/files/Cashbook.xlsm"
              download="Cashbook.xlsm"
            >
              <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" />
              <span className="text-violet-800 text-sm">link</span>
            </a>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("Projectwork")}
          >
            JDL Assist
            <a
              className="inline-block"
              href="public/files/JDLdata.xls"
              download="JDLdata.xls"
            >
              <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" />
              <span className="text-violet-800 text-sm">link</span>
            </a>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("Projectwork")}
          >
            NLD Ledger
            <a
              className="inline-block"
              href="public/files/JDLproucher.xlsm"
              download="JDLproucher.xlsm"
            >
              <CgLoadbarDoc className="ms-5 text-violet-800 inline-block" />
              <span className="text-violet-800 text-sm">link</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default ProjectsCard;
