import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
          <li><Link to="/about">KOR</Link></li>
          <span></span>
          <li><Link to="/about">ENG</Link></li>
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

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
      title="Go to top"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
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
        {/* Your routes */}
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;