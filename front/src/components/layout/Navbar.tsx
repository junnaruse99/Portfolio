import React, { useState, useEffect } from 'react';
import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const nav = ['Profile', 'Projects', 'Tools', 'Experience', 'Education', 'Contact']

  // Get the position of the scroll
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  // Set the class dependeing on the position of the scroll
  const [navPosition, setNavPosition] = useState<string>('');

  // Function to set the scroll position
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  // Get the viewport size
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  // Calculate when there is a change
  useEffect(() => {
      // component will mount
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Change the class depending on the difference on the position of the scroll
      if (scrollPosition > 0.90*vh) {
        setNavPosition('fixed');
      } else {
        setNavPosition('absolute');
      }

      // Component will unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });

  // Logic to set active nav
  const aux : string[] = Array(nav.length).fill('');
  aux[0] = 'active';
  const [ toggleClass, setToggleClass ] = useState<string>("toggle-inactive");
  const [ active, setActive ] = useState<string[]>(aux);

  // Activate toggle depending on click
  const activateToggle = () => {
    if (toggleClass === 'toggle-active') {
      setToggleClass('toggle-inactive');
    } else {
      setToggleClass('toggle-active');
    }
  }

  // Function called to set to active when clicking on nav
  const onActive = (id : number) : void => {
    aux.fill('');
    aux[id] = 'active';
    setActive(aux);
    setToggleClass('toggle-inactive');
  }

  return (
    <nav className={`navbar ${navPosition}`}>
      <button className='nav-toggle' onClick={activateToggle}><FontAwesomeIcon icon={faBars} size = '1x'/></button>
      <ul className={`navbar-nav ${toggleClass}`}>
        {nav.map((item, idx) => (
          <li key={idx} className={`nav-item ${active[idx]}`} onClick={() => onActive(idx)}><a href={`#${item}`}>{item}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;