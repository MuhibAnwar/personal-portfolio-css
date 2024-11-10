import React, { useState } from 'react';
import { MdOutlineMenuBook, MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: "white"}}>
      <h2 id="per" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>PERSONAL PORTFOLIO</h2>

      {/* Desktop navigation menu */}
      <ul id='nav' style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0,color :"white" }}>
        <li color='white'><a href="#hero" style={linkStyle}color='white'>Home</a></li>
        <li><a href="#about" style={linkStyle}>About</a></li>
        <li><a href="#projects" style={linkStyle}>Projects</a></li>
        <li><a href="#skills" style={linkStyle}>Skills</a></li>
        <li><a href="#contact" style={linkStyle}>Contact me</a></li>
      </ul>

      {/* Mobile menu icon */}
      <div style={{ cursor: 'pointer' }} onClick={toggleMenu}>
        {isMenuOpen ? <MdOutlineClose size={24} /> : <MdOutlineMenuBook size={24} />}
      </div>

      {/* Dropdown menu for mobile */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px', // Positioned below the navbar
          left: 0, // Align to the left side
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          borderRadius: '4px',
          zIndex: 10, // Ensure it appears above other elements
          color:"white"
        }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0,color:"white" }}>
            <li><a href="#hero" style={dropdownLinkStyle}>Home</a></li>
            <li><a href="#about" style={dropdownLinkStyle}>About</a></li>
            <li><a href="#projects" style={dropdownLinkStyle}>Projects</a></li>
            <li><a href="#skills" style={dropdownLinkStyle}>Skills</a></li>
            <li><a href="#contact" style={dropdownLinkStyle}>Contact me</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Main link style for desktop navigation
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  fontWeight: '500',
};

// Dropdown link style for mobile menu
const dropdownLinkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.5rem 0',
  display: 'block', // Ensure each link takes up a full line
};

export default Navbar;
