import './App.css';

import githubLogoLight from "./assets/github-mark-light.svg";
import linkedinLogoLight from "./assets/linkedin-light.svg";
import githubLogoDark from "./assets/github-mark-dark.svg";
import linkedinLogoDark from "./assets/linkedin-dark.svg";
import MyResume from "./assets/Alexandre-Santos-Resume.pdf";
import downArrowLight from "./assets/down-arrow-light.svg";
import downArrowDark from "./assets/down-arrow-dark.svg";

import Toggle from './components/Toggle/Toggle';
import NavBar from './components/NavBar/NavBar';
import MyWork from './components/MyWork/MyWork';
import WorkContent from './components/MyWork/myWorkContent.js';

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
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

   // Function to scroll to the "About Me" section
   const scrollToAboutMe = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

   // Function to scroll to the "Tech Sync" section
   const scrollToTechSync = () => {
    techSyncRef.current.scrollIntoView({ behavior: "smooth" });
  };

     // Function to scroll to the "Projects" section
     const scrollToProjects = () => {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <NavBar 
        isChecked={isDark}
      />
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
        scrollLocation={projectsRef}
      />
      <h1 className='title'>Projects</h1>
      <a className='box' target="_blank" href='https://tech-sync.io/talent'>Tech-Sync</a>
      <a className='box'>Authentic Ear Academy (Coming Soon)</a>
      <a target="_blank" className='box' href={MyResume} download="Alexandre-Santos-Resume.pdf">Resume Download</a>
      <div className='scroll'>
        <button className='down-arrow-button' onClick={scrollToAboutMe}><img src={isDark ? downArrowLight : downArrowDark} className='down-arrow' alt='arrow pointing downwards' /></button>
      </div>
      <MyWork contentList={WorkContent.aboutMe} scrollLocation={aboutMeRef}/>
      <div className='scroll'>
        <button className='down-arrow-button' onClick={scrollToTechSync}><img src={isDark ? downArrowLight : downArrowDark} className='down-arrow' alt='arrow pointing downwards' /></button>
      </div>
      <MyWork contentList={WorkContent.techsync} scrollLocation={techSyncRef}/>
      <footer className='columns-3'>
        <a aria-label="View my Github profile" target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark} alt="Github logo"/></a>
        <div className='scroll-up-arrow'>
          <button className='down-arrow-button up-arrow' onClick={scrollToProjects}><img src={isDark ? downArrowLight : downArrowDark} className='down-arrow' alt='arrow pointing upwards' /></button>
        </div>
        <a aria-label="View my Linkedin profile" target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark} alt="Linkedin logo"/></a>
      </footer>
    </div>
  )
}

export default App
