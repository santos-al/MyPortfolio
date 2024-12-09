import './App.css'
import githubLogoLight from "./assets/github-mark-light.svg"
import linkedinLogoLight from "./assets/linkedin-light.svg"
import githubLogoDark from "./assets/github-mark-dark.svg"
import linkedinLogoDark from "./assets/linkedin-dark.svg"
import MyResume from "./assets/Alexandre-Santos-Resume.pdf";

import Toggle from './components/Toggle/Toggle'
import NavBar from './components/NavBar/NavBar';


import { useState, useEffect } from 'react'

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
      <footer>
        <a target="_blank" href="https://github.com/santos-al" ><img className="svg-links" src={isDark ? githubLogoLight : githubLogoDark}/></a>
        <a target="_blank" href="https://www.linkedin.com/in/santos-alexandre1"><img className="svg-links" src={isDark ? linkedinLogoLight : linkedinLogoDark}/></a>
      </footer>
    </div>
  )
}

export default App
