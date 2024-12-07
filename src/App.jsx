import React from 'react';
import './App.css';
import profileImage from './assets/profile.png'; // Update this to the name of your image file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Sreeram Melpadi</h1>
        <p>Senior Software Engineer | Passionate about software development and problem-solving.</p>
      </header>

      <section className="portfolio-section">
        <h2>About Me</h2>
        <p>Insert a short bio here about your background, skills, and interests.</p>

        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Project description goes here.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Project description goes here.</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Project description goes here.</p>
        </div>

        <h2>Contact</h2>
        <p>Feel free to reach out via <a href="mailto:sreeram.melpadi@example.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/sreeram-melpadi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </section>
    </div>
  );
}

export default App;
