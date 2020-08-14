import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <Link to='/about'>
      <div className="about-link">
        <p>LEARN MORE ABOUT CRYPTOCURRENCY</p>
        </div>
    </Link>
    </nav>
  );
};

export default Navbar;
