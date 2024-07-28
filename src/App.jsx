import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Componentes/section/Navbar'
import Presentation from './Componentes/section/Presentation'
import Projects from './Componentes/section/Projects'
import Abouth from './Componentes/section/Abouth'
import Footer from './Componentes/section/Footer'
import ThemeContext from '../src/ThemeContext' 

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode ? JSON.parse(savedMode) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    } else {
      document.body.classList.add('light-mode')
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="App">
        <Navbar />
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Alternar para o Modo Claro' : 'Alternar para o Modo Escuro'}
        </button>
        <Presentation />
        <Projects />
        <Abouth />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App
