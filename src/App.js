import React from 'react';
import { BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import AboutProject from './components/AboutProject';
import './App.css';


function Header() {
  return (
    <header id="header">
      <h1><Link to="/">NOONKKOT</Link></h1>
      <nav id="nav">
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/project">PROJECT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <p>Copyright 2024. LEE SEOLHWA All rights reserved.</p>
      <ul>
        <li><a href="https://github.com/noonkkot">github</a></li>
        <li><a href="mailto:oyatnunkkot@gmail.com">mail</a></li>
      </ul>
    </footer>
  );
}

function App() {
  return (
    <Router>
        <Header />
        <About />
        <AboutProject />
        <Contact />
        <Routes>
          
          
          
          
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
