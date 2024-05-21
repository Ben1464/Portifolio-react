import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import './styles/App.css';
import moonIcon from '../src/icons/moon.png'; // Replace with your actual file path
import sunIcon from '../src/icons/light.png'; // Replace with your actual file path

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
    <div className="App">
      <Navbar />
      <button onClick={toggleDarkMode} className="toggle-dark-mode">
        <img src={darkMode ? sunIcon : moonIcon} alt="Toggle theme" />
      </button>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
