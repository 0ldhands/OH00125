import React, { useRef } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Other from './component/Other'
import {Usercontext} from './Context/Context.jsx'

const App = () => {

  const Education = useRef(null);
  const Certifications = useRef(null);
  const Experience = useRef(null);
  const Projects = useRef(null);
  const Hobbies = useRef(null);
  const Projectwork = useRef(null);

    const scrollToSection = (section) => {
    if (section === "Education") Education.current.scrollIntoView({ behavior: "smooth" });
    if (section === "Certifications") Certifications.current.scrollIntoView({ behavior: "smooth" });
    if (section === "Experience") Experience.current.scrollIntoView({ behavior: "smooth" });
    if (section === "Projects") Projects.current.scrollIntoView({ behavior: "smooth" });
    if (section === "Hobbies") Hobbies.current.scrollIntoView({ behavior: "smooth" });
    if (section === "Projectwork") Projectwork.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
   <Usercontext.Provider value={{Education,Certifications,Experience,Projects,Hobbies,Projectwork,scrollToSection}}>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Other' element={<Other/>}/>
      </Routes>
    </Router>
   </Usercontext.Provider>
  )
}

export default App