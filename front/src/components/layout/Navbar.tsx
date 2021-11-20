import React, { useState } from 'react';
import './layout.css';

const Navbar = () => {

  const [ toggleClass, setToggleClass ] = useState<String>("toggle-inactive");

  const activateToggle = () => {
    if (toggleClass === 'toggle-active') {
      setToggleClass('toggle-inactive');
    } else {
      setToggleClass('toggle-active');
    }
  }

  return (
    <nav className='navbar'>
      <ul className={`navbar-nav ${toggleClass}`}>
        <li className='nav-item'>Profile</li>
        <li>Projects</li>
        <li>Abilities</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Contact me</li>
      </ul>
      <button className='nav-toggle' onClick={activateToggle}>Press</button>
    </nav>
  );
}

export default Navbar;