import React, { useState } from 'react';
import './Navbar.css';
import ditLogo from '../../assets/images/DIT.png';
import nitLogo from '../../assets/images/nit.png';
import mrsiLogo from '../../assets/images/newLogo.png';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (e, tabName) => {
    e.stopPropagation(); // Prevent event from bubbling
    // onTabClick(tabName);
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={ditLogo} alt="DIT Logo" className="logo" />
        <img src={nitLogo} alt="NIT Logo" className="logo" />
        <img src={mrsiLogo} alt="MRSI Logo" className="logo" />
      </div>
      <button
        className="menu-toggle"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={(e) => handleClick(e, 'Home')}>
          Home
        </Link>
        <Link to="/about" onClick={(e) => handleClick(e, 'About')}>
          About
        </Link>
        <Link to="/dates" onClick={(e) => handleClick(e, 'Important Dates')}>
          Important Dates
        </Link>
        <Link
          to="/registration"
          onClick={(e) => handleClick(e, 'Registrations')}
        >
          Registrations
        </Link>
        <Link to="/submission" onClick={(e) => handleClick(e, 'Submission')}>
          Paper Submission
        </Link>
        <Link to="/team" onClick={(e) => handleClick(e, 'Team')}>
          Organizing Committee
        </Link>
        <Link to="/advisory" onClick={(e) => handleClick(e, 'Advisory')}>
          National Advisory
        </Link>
        <Link to="/speakers" onClick={(e) => handleClick(e, 'Speakers')}>
          Speakers
        </Link>
        <Link to="/contact" onClick={(e) => handleClick(e, 'Contact')}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
