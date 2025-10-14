import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Other from "./component/Other";
import { Usercontext } from "./Context/Context.jsx";
import "./index.css";
import Certificate from "./pages/Certificate.jsx";
import Experience from "./pages/Experience.jsx";
import Educations from "./pages/Educations.jsx";
import Prolayout from "./layout/Prolayout.jsx";
import Hobbieslayout from "./layout/Hobbieslayout.jsx";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <Usercontext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div id={theme ? "body" : "bodyt"} className="min-h-[100dvh] bg-gray-900">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/other" element={<Other />} />
            <Route path="/educations" element={<Educations />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Prolayout />} />
            <Route path="/hobbieslayout" element={<Hobbieslayout />} />
            <Route path="/Other" element={<Other />} />
          </Routes>
        </Router>
      </div>
    </Usercontext.Provider>
  );
};

export default App;
