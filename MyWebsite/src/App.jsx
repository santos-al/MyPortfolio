import './App.css';
import githubLogoLight from "./assets/github-mark-light.svg";
import linkedinLogoLight from "./assets/linkedin-light.svg";
import githubLogoDark from "./assets/github-mark-dark.svg";
import linkedinLogoDark from "./assets/linkedin-dark.svg";
import MyResume from "./assets/Alexandre-Santos-Resume.pdf";
import downArrowLight from "./assets/down-arrow-light.svg";
import downArrowDark from "./assets/down-arrow-dark.svg";
import techsyncLogo from "./assets/TechSync-Logo.png";

import Toggle from './components/Toggle/Toggle';
import NavBar from './components/NavBar/NavBar';


import { useState, useEffect, useRef } from 'react';

function App() {

  // Initialize state with value from localStorage or default to true
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Update localStorage whenever isDark changes
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  // Prevents background color bug on mobile devices. With this code the html element is also connected to the color theme of the App.
  // Used Hex value for color instead of hsl, because it was rendering correctly.
  if (isDark) {
    document.getElementById("html").style.backgroundColor = "#10260d";
  } else {
    document.getElementById("html").style.backgroundColor = "#efeedc";
  }

  const techSyncRef = useRef(null);

   // Function to scroll to the "More Info" section
   const scrollToMoreInfo = () => {
    techSyncRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <NavBar 
        isChecked={isDark}
      />
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Projects</h1>
      <a className='box' target="_blank" href='https://tech-sync.io/talent'>Tech-Sync</a>
      <a className='box'>Authentic Ear Academy (Coming Soon)</a>
      <a target="_blank" className='box' href={MyResume} download="Alexandre-Santos-Resume.pdf">Resume Download</a>
      <div className='scroll'>
        <button className='down-arrow-button' onClick={scrollToMoreInfo}><img src={isDark ? downArrowLight : downArrowDark} className='down-arrow' alt='arrow pointing downwards' /></button>
      </div>
      <div className='techsync-buffer'></div>
      <section 
        className='techsync columns-2'
        ref={techSyncRef}
      >

        <div className='section-column sm:w-1/2 w-full'>
          <div className='flex justify-center'>
            <a className='project-title' target="_blank" href='https://tech-sync.io/talent'>Tech-Sync</a>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={{color: "var(--techsync-color-purple)"}}>Description</h3>
            <p>
              Unlock the next level of your tech career with Tech-Sync, where we simplify your job search into a streamlined experience based on probability. 
              Our advanced matchmaking system will connect you with startups that align with your unique skills and career goals. 
              Say goodbye to traditional job sourcing and hello to a tailored path toward your dream role.
            </p>
          </div>
          <div className='project-text'>
            <h3 className='project-subtitle' style={{color: "var(--techsync-color-blue)"}}>App Overview</h3>
            <p>Tech-Sync is a MERN Stack application co-developed by me and another programmer. 
              As graduates of web development bootcamps, we experienced firsthand how challenging it can be to break into the tech industry, 
              especially for those with non-traditional backgrounds. We built this app to enhance our skills, improve our job prospects, 
              and address a market need by connecting tech professionals with potential employers in a unique way.
            </p>           
          </div>
        </div>
        <div className='section-column sm:w-1/2 w-full flex items-center justify-center' style={{flexDirection: "column"}}>
          <img className="project-image max-h-full" src={techsyncLogo} alt='Logo for TechSync'></img>
          <a className='website-link'>Visit Website</a>
        </div>
      </section>
      {/* <div className='footer-buffer'></div> */}
      <footer className='columns-2'>
        <a aria-label="View my Github profile" target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark} alt="Github logo"/></a>
        <a aria-label="View my Linkedin profile" target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark} alt="Linkedin logo"/></a>
      </footer>
    </div>
  )
}

export default App
