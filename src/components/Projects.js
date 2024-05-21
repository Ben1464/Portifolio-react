import React from 'react';
import '../styles/Projects.css';
import video from '../videos/Vid_20240517_183410.mp4';
import video1 from '../videos/Vid_20240404_062449.mp4';
import video2 from '../videos/weather.mp4';
import video3 from '../videos/health2.mp4';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Coffee Digital</h3>
          <p>Coffee Digital is a comprehensive resource tailored to provide solutions to the challenges facing coffee farmers across the globe. From pest and disease infestations to nutrient deficiencies. The platform offers targeted remedies curated for maximum effectiveness. Use the search button to search for solutions to all agronomical challenges you face in your coffee farming endeavors.</p>
          <h4>Demo video</h4>
          <video controls>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h4 className='blinking-link'><a href="https://coffee-digital.vercel.app/">Live link</a></h4>
        </div>
        <div className="project-item">
          <h3>Greenlife Bot-site</h3>
          <p>The platform offers information on curated remedies tailored for maximum impact on your farm.</p>
          <h4>Demo video</h4>
          <video controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h4 className='blinking-link'><a href="https://green-bot-site.vercel.app/">Live link</a></h4>
        </div>
        <div className="project-item">
          <h3>Weather-Checker</h3>
          <p>Weather-Checker is your go-to weather webpage for instant updates and future forecasts. With a simple search, get current weather details like temperature, humidity, and rain rate. Plan ahead with hourly forecasts.</p>
          <h4>Demo video</h4>
          <video controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h4 className='blinking-link'><a href="https://weather-app-omega-kohl-49.vercel.app/">Live link</a></h4>
        </div>
        <div className="project-item">
          <h3>Health Mate</h3>
          <p>Health Mate web application is designed to address the increasing health concerns related to obesity. It calculates the user's BMI by taking input of their first name, height (in centimeters), and weight (in kilograms), and then provides personalized health advice and a proposed meal plan based on the BMI category.</p>
          <h4>Demo video</h4>
          <video controls>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h4 className='blinking-link'><a href="https://health-mate-psi.vercel.app/">Live link</a></h4>
        </div>
      </div>
    </section>
  );
}

export default Projects;
