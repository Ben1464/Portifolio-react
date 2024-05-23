import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/IMG_20240315_160134_754.jpg'; // Correctly import the image

const Home = ({ darkMode }) => {
  return (
    <section id="home" className={`home ${darkMode ? 'dark-mode' : ''}`}>
      <img className='profile' src={profileImage} alt="Profile" /> {/* Use the imported image variable */}
      <div className="home-content">
        <h2 className='welcome'>Hi! Welcome to My Portfolio.</h2>
        {/* <p>This is a showcase of my work.</p> */}
      </div>
    </section>
  );
}

export default Home;
