import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { Usercontext } from "../Context/Context";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const val=useContext(Usercontext)

  const{scrollToSection}=val

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Education", path: "/",btn:"Education" },
    { label: "Certifications", path: "/",btn:"Certifications" },
    { label: "Experience", path: "/",btn:"Experience" },
    { label: "Projects", path: "/",btn:"Projects"},
    { label: "Hobbies", path: "/",btn:"Hobbies"},
    { label: "Contact", path: "/Contact",special:true},
  ];

  return (
    <header className="flex justify-between items-center m-4 pb-2 border-b border-gray-300">
      {/* Brand + Toggle */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-violet-800">
          GNANA SEKAR
        </h1>
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden sm:block">
        <ul className="flex space-x-5 text-sm">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={item.special
                  ? "bg-violet-800 text-white px-3 py-1 rounded hover:bg-violet-500"
                  : "px-3"}
                  onClick={()=>scrollToSection(item.btn)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-violet-800 text-white transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out z-50 sm:hidden`}
      >
        <ul className="p-6 space-y-6 text-lg">
          {navItems.map((item, i) => (
            <li key={i}  className="border-b-2 border-b-violet-700 pb-2">
              <Link
                to={item.path}
               
                onClick={() => setIsOpen(false)}
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
