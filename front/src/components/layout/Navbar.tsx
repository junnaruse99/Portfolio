import React, { useState } from 'react';
import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const aux : string[] = Array(6).fill('');
  aux[0] = 'active';
  const [ toggleClass, setToggleClass ] = useState<string>("toggle-inactive");
  const [ active, setActive ] = useState<string[]>(aux);


  const activateToggle = () => {
    if (toggleClass === 'toggle-active') {
      setToggleClass('toggle-inactive');
    } else {
      setToggleClass('toggle-active');
    }
  }

  const onActive = (id : number) : void => {
    aux.fill('');
    aux[id] = 'active';
    setActive(aux);
    setToggleClass('toggle-inactive');
  }

  return (
    <nav className='navbar'>
      <button className='nav-toggle' onClick={activateToggle}><FontAwesomeIcon icon={faBars} size = '1x'/></button>
      <ul className={`navbar-nav ${toggleClass}`}>
        <li className={`nav-item ${active[0]}`} onClick={() => onActive(0)}><a href='#Profile'>Profile</a></li>
        <li className={`nav-item ${active[1]}`} onClick={() => onActive(1)}><a href='#Projects'>Projects</a></li>
        <li className={`nav-item ${active[2]}`} onClick={() => onActive(2)}><a href='#Abilities'>Abilities</a></li>
        <li className={`nav-item ${active[3]}`} onClick={() => onActive(3)}><a href='#Experience'>Experience</a></li>
        <li className={`nav-item ${active[4]}`} onClick={() => onActive(4)}><a href='#Education'>Education</a></li>
        <li className={`nav-item ${active[5]}`} onClick={() => onActive(5)}><a href='#Contact'>Contact me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;