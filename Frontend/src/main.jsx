import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Hero_section from './Components/Hero_section.jsx'
import Skill from './Components/Skill.jsx'
import Contact from './Components/Contact.jsx'
import Experience from './Components/Experience.jsx'
import Projects from './Components/Projects.jsx'
import Certificates from './Components/Certificates.jsx'
import Footer from './Components/Footer.jsx'
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById('root')).render(
  <StrictMode>
     
  
  <Toaster
    position="top-right"
    reverseOrder={false}
  />

     <Navbar /> 
    <Hero_section />
 <About/> 
   <Skill/>
    <Experience/> 
    <Projects/>  
    
    <Certificates/>  
   <Contact/>
   <Footer/>
   
  </StrictMode>,
)
