import './App.css';

import githubLogoLight from "./assets/github-mark-light.svg";
import linkedinLogoLight from "./assets/linkedin-light.svg";
import githubLogoDark from "./assets/github-mark-dark.svg";
import linkedinLogoDark from "./assets/linkedin-dark.svg";
import MyResume from "./assets/Alexandre-Santos-Resume.pdf";
import DisplayContent from './components/DisplayContent/DisplayContent';
import contentList from './components/MyWork/myWorkContent.js'
// import downArrowLight from "./assets/down-arrow-light.svg";
// import downArrowDark from "./assets/down-arrow-dark.svg";

import Toggle from './components/Toggle/Toggle';
import NavBar from './components/NavBar/NavBar';
// import MyWork from './components/MyWork/MyWork';
// import WorkContent from './components/MyWork/myWorkContent.js';

import { useState, useEffect } from 'react';

function App() {

  // Initialize state with value from localStorage or default to true
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  });

  // Use State to update UI and display content of selected button
  const [contentDisplayed, setContentDisplayed] = useState('aboutMe')

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

  function handleButtonClick(clickedButton) {
    setContentDisplayed(clickedButton)
  }

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <NavBar 
        isChecked={isDark}
      />
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>{contentList[contentDisplayed].title}</h1>
      <main className='page-content'>
        <section className='content-selection'>
          <button className='box' onClick={() => handleButtonClick('aboutMe')}>About Me</button>
          <button className='box' onClick={() => handleButtonClick('techsync')}>Tech-Sync</button>
          <button className='box' onClick={() => handleButtonClick('taskManager')}>Task Manager</button>
          <button className='box' onClick={() => handleButtonClick('employeeTracker')}>Employee Tracker</button>
          <button className='box' onClick={() => handleButtonClick('noteTaker')}>Note Taker</button>
          {/* <a className='box' onClick={() => handleButtonClick('certifications')}>Certifications</a> */}
          <a target="_blank" className='box' href={MyResume} download="Resume-Alexandre-Santos.pdf">Resume Download</a>
          <div className='socials'>
            <a aria-label="View my Github profile" target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark} alt="Github logo"/></a>
            <a aria-label="View my Linkedin profile" target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark} alt="Linkedin logo"/></a>
          </div>
        </section>
        <DisplayContent contentList={contentList[contentDisplayed]}/>
        <div className='socials-footer'>
            <a aria-label="View my Github profile" target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark} alt="Github logo"/></a>
            <a aria-label="View my Linkedin profile" target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark} alt="Linkedin logo"/></a>
        </div>
      </main>
    </div>
  )
}

export default App