import React from 'react';
import { Link } from 'react-scroll';
import MainPage from './components/MainPage';
import './App.css';

const App = () => {
  return (
    <div className="MainPage font-sans">
      <nav className='navbar' style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#0a1930', zIndex: 1000}}>
      <Link to="about" smooth={true} duration={1000} offset={-60}>About</Link>
      <Link to="projects" smooth={true} duration={1000} offset={-60}>Projects</Link>
      <Link to="skills" smooth={true} duration={1000} offset={-60}>Skills</Link>
      <Link to="contact" smooth={true} duration={1000} offset={-60}>Contact</Link>
      </nav>

      <div style={{ paddingTop: '70px' }}>
        <MainPage />
      </div>
    </div>

  );
};

export default App;
