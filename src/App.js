import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
// import Message from './components/Message';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Message/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
