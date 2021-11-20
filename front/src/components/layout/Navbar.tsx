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
      <button className='nav-toggle' onClick={activateToggle}><span className='navbar-toggler-icon' /></button>
      <ul className={`navbar-nav ${toggleClass}`}>
        <li className='nav-item'><a href='#Profile'>Profile</a></li>
        <li className='nav-item'><a href='#Projects'>Projects</a></li>
        <li className='nav-item'><a href='#Abilities'>Abilities</a></li>
        <li className='nav-item'><a href='#Experience'>Experience</a></li>
        <li className='nav-item'><a href='#Education'>Education</a></li>
        <li className='nav-item'><a href='#Contact'>Contact me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;