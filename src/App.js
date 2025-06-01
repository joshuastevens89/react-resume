import React from 'react';
import './App.css';
import profilePic from './src/assets/Joshua-Stevens-LinkedIn.png'; // Replace with actual image file in /src/assets

function App() {
  return (
    <div className="App">
      <img src={profilePic} alt="Joshua Stevens" className="profile-pic" />
      <h1>Joshua Stevens</h1>
      <h2>Full Stack Web Developer | Software Engineer</h2>
      <p>Dallas, TX | 469.504.5883 | Joshuastevens1989.email@gmail.com</p>

      <section>
        <h3>Technical Skills</h3>
        <ul>
          <li>Front-End: HTML5, CSS3, JavaScript (ES6+), React, Redux, React Router, Responsive Design, DOM, UI/UX</li>
          <li>Back-End: Node.js, Express.js, REST APIs, SQLite, PostgreSQL, JWT, Auth, Sessions</li>
          <li>CS Fundamentals: Data Structures, Algorithms, Big O, Functional Programming, Problem Solving</li>
          <li>Version Control: Git, GitHub, Git Workflow, Code Reviews</li>
          <li>Testing: Unit & Integration Testing, TDD</li>
          <li>Tools: VS Code, NPM, Agile, Pair Programming, Refactoring</li>
          <li>Deployment: Netlify, Heroku, CI/CD</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ol>
          <li>User Interface Clone - Responsive UI with HTML/CSS</li>
          <li>React Todo App - SPA with CRUD and Hooks</li>
          <li>State Dashboard - React + Redux</li>
          <li>Routing Project - React Router with dynamic paths</li>
          <li>JavaScript Game/Tool - DOM-based interactivity</li>
          <li>API with Node/Express - RESTful endpoints</li>
          <li>Database Integration - SQLite/PostgreSQL with Knex</li>
          <li>Auth System - JWT, Login/Protected Routes</li>
          <li>Full Stack App - Front + Back Integration</li>
          <li>Testing Suite - Jest/Supertest</li>
          <li>CS Challenges - Algorithms and DS in JS</li>
          <li>Team Projects - Agile build weeks</li>
          <li>Portfolio Website - Deployed resume site</li>
          <li>Capstone - Full stack CI/CD product</li>
        </ol>
      </section>

      <section>
        <h3>Experience</h3>
        <p><strong>Full Stack Web Developer (Remote)</strong> — BloomTech Institute of Technology</p>
        <ul>
          <li>Built apps with React, Node.js, Express, SQL, REST APIs</li>
          <li>Implemented secure auth with JWT, sessions</li>
          <li>Wrote unit/integration tests with TDD</li>
          <li>Used Git/GitHub for collaboration and PRs</li>
          <li>Followed Agile practices in remote teams</li>
          <li>Deployed apps using Netlify & Heroku with CI/CD</li>
        </ul>
      </section>

      <section>
        <h3>Education</h3>
        <p>BloomTech - Full Stack Web Development (2021–2025)</p>
        <p>Dallas College DCCCD El Centro (2013–2015)</p>
        <p>Dallas College DCCCD (2024–Present)</p>
      </section>
    </div>
  );
}

export default App;
