import React from 'react';
import '../styles/Home.css';
import profileImage from '../images/IMG_20231222_174337_886.jpg'; // Correctly import the image

const Home = () => {
  return (
    <section id="home" className="home">
      <img className='profile' src={profileImage} alt="Profile" /> {/* Use the imported image variable */}
      <h2>Welcome to My Portfolio</h2>
      <p>This is a showcase of my work.</p>
    </section>
  );
}

export default Home;
