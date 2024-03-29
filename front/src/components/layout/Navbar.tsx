import React, { useState, useEffect } from 'react';
import './layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  const nav = ['Profile', 'Experience', 'Projects', 'Tools', 'Education', 'Contact']

  // Get the position of the scroll
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  // Set the class dependeing on the position of the scroll
  const [navPosition, setNavPosition] = useState<string>('');

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

  // Function to set the scroll position
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      checkSection();

  };
  // Get the viewport size
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  // Get Id of models
  let idsOffset : number[] = [];
  for (let i = 0; i < nav.length; i++) {
    const element = document.getElementById(nav[i]);
    idsOffset[i] = element ? element.offsetTop : 0;
  };
  
  // Function to check in what section I am currently in
  const checkSection = () => {
    for (let i = nav.length - 1; i >= 0; i--) {
      if (idsOffset[i] && idsOffset[i] - 10 < scrollPosition) {
        onActive(i);
        break;
      }
    }
  };

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

      // Check section

      // Component will unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });

  // Function called to set to active when clicking on nav
  const onActive = (id : number) : void => {
    aux.fill('');
    aux[id] = 'active';
    setActive(aux);
    setToggleClass('toggle-inactive');
  }

  return (
    <nav className={`navbar ${navPosition}`}>
      <button className='nav-toggle' onClick={activateToggle}><FontAwesomeIcon icon={faBars} size='lg'/></button>
      <ul className={`navbar-nav ${toggleClass}`}>
        {nav.map((item, idx) => (
          <li key={idx} className={`nav-item ${active[idx]}`} onClick={() => {}}><a href={`#${item}`}>{item}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;