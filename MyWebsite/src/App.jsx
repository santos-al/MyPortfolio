import './App.css'
import Toggle from './components/Toggle/Toggle'
import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>HELLO</h1>
      <p className='box'>Text and stuff</p>
    </div>
  )
}

export default App
