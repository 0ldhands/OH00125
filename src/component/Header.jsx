import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Usercontext } from "../Context/Context";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const val=useContext(Usercontext)

  const{theme,setTheme}=val

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Education", path: "/educations"},
    { label: "Certifications", path: "/certificate"},
    { label: "Experience", path: "/experience"},
    { label: "Projects", path: "/project"},
     { label: "Hobbies", path: "/hobbieslayout"},
    { label: "Contact", path: "/contact",special:true},
   ,
  ];


  return (
    <header className="flex justify-between items-center p-3  pb-2 border-b border-gray-300">
      {/* Brand + Toggle */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h1 className={`text-2xl sm:text-3xl font-bold ${theme ? "text-violet-800" : "text-blue-600"} `}>
          GNANA SEKAR
        </h1>
        <div className="flex items-center">
          <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <span className="sm:hidden ms-2" onClick={()=>setTheme((cur)=>!cur)}>{theme ?<MdOutlineDarkMode size={25} className="text-violet-900" /> : <MdOutlineLightMode size={25} className="text-blue-600"/> }</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-5 text-sm">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={item.special
                  ? `${theme ?"bg-violet-800" : "bg-blue-600"} text-white px-3 py-1 rounded ${theme ?"hover:bg-violet-500":"hover:bg-blue-500"}`
                  : `px-3 ${theme ? "text-black":"text-white"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li onClick={()=>setTheme((cur)=>!cur)}>{theme ?<MdOutlineDarkMode size={20} className="text-violet-900" /> : <MdOutlineLightMode size={20} className="text-blue-600"/> }</li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 ${theme?"bg-white text-violet-500":"bg-gray-700 text-white"}  transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-50 sm:hidden`}
      >
        <ul className="p-6 space-y-6 text-lg">
          {navItems.map((item, i) => (
            <li key={i}  className="border-b-1 border-b-gray-500 pb-2">
              <Link
                to={item.path}

                onClick={() => setView(item.btn)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
