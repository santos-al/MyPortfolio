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
      <a className='box' onClick={scrollToMoreInfo}>Tech-Sync</a>
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

        <div className='w-1/2'>
          <div className='flex justify-center'>
            <a className='project-title' target="_blank" href='https://tech-sync.io/talent'>Tech-Sync</a>
          </div>
          <div>
            <h3>Overview</h3>
            <p>overview explanation</p>
          </div>
          <div>
            <h3>Tech specs</h3>
            <p>tech explanation</p>           
          </div>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <img className="techsync-logo" src={techsyncLogo} alt='Logo for TechSync' ></img>
        </div>
      </section>
      <div className='footer-buffer'></div>
      <footer className='columns-2'>
        <a aria-label="View my Github profile" target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark} alt="Github logo"/></a>
        <a aria-label="View my Linkedin profile" target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark} alt="Linkedin logo"/></a>
      </footer>
    </div>
  )
}

export default App
