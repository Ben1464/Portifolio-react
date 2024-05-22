import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import './styles/App.css';
import moonIcon from '../src/icons/moon.png';
import sunIcon from '../src/icons/light.png';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} />
      <button  onClick={toggleDarkMode} className="toggle-dark-mode">
        <img src={darkMode ? sunIcon : moonIcon } alt="Toggle theme" />
      </button>
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
