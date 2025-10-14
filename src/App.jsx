import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Other from "./component/Other";
import { Usercontext } from "./Context/Context.jsx";
import './index.css'
import Certificate from "./pages/Certificate.jsx";
import Experience from "./pages/Experience.jsx";
import Educations from "./pages/Educations.jsx";
import Projectlayout from "./layout/projectlayout.jsx";
import Hobbieslayout from "./layout/Hobbieslayout.jsx";

const App = () => {

  const [theme, setTheme] = useState(false);

  return (
    <Usercontext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
     <div id={theme ? "body" : "bodyt"}>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Other" element={<Other />} />
          <Route path="/Educations" element={<Educations />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Project" element={<Projectlayout />} />
          <Route path="/Hobbieslayout" element={<Hobbieslayout />} />
        </Routes>
      </Router>
     </div>
    </Usercontext.Provider>
  );
};

export default App;
