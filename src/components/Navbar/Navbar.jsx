import React, { useState } from 'react';
import './Navbar.css';
import ditLogo from '../../assets/images/DIT.png';
import nitLogo from '../../assets/images/nit.png';
import ucost from '../../assets/ucost.png';
import nrf from '../../assets/serb.png';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdownName) => {
    setDropdownOpen(dropdownOpen === dropdownName ? null : dropdownName); // Toggle dropdown
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setDropdownOpen(null); // Close any open dropdown
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={ditLogo} alt="DIT Logo" className="logo" />
        <img src={nitLogo} alt="NIT Logo" className="logo" />
        <img src={nrf} alt="MRSI Logo" className="logo" />
        <img src={ucost} alt="ISDT Logo" className="logo" />
      </div>
      <button
        className="menu-toggle"
        onClick={toggleNavbar}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={handleClick}>
          Home
        </Link>

        <Link to="/about" onClick={handleClick}>
          About
        </Link>

        {/* Conference Details Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => handleDropdown('conferenceDetails')}
          >
            Conference Details <ChevronDown />
          </button>
          {dropdownOpen === 'conferenceDetails' && (
            <div className="dropdown-menu">
              <Link to="/dates" onClick={handleClick}>
                Important Dates
              </Link>
              <Link to="/registration" onClick={handleClick}>
                Registration Links
              </Link>
              <Link to="/submission" onClick={handleClick}>
                Download
              </Link>
            </div>
          )}
        </div>

        {/* Committees & Speakers Dropdown */}
        <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => handleDropdown('committeesSpeakers')}
          >
            Committees & Speakers <ChevronDown />
          </button>
          {dropdownOpen === 'committeesSpeakers' && (
            <div className="dropdown-menu">
              <Link to="/team" onClick={handleClick}>
                Organizing Committee
              </Link>
              <Link to="/advisory" onClick={handleClick}>
                National Advisory
              </Link>
              <Link to="/speakers" onClick={handleClick}>
                Speakers
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" onClick={handleClick}>
          Contact Us
        </Link>
        <Link to="/places" onClick={handleClick}>
          Places To Visit
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
