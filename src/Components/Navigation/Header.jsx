import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import RoundButton from '../Buttons/RoundButton';
import './Header.css';

function Header() {
  const [HamburgerState,setHamburgerState] = useState(false);


  return (
    <header className="Header">
        <div className='header-container'>
            <p className='logo'>CalmDeer</p>
            <ul className={HamburgerState?'nav-bar':'nav-bar nav-bar-hidden'}>
                <NavLink to='/' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="Home">Home</p></NavLink>
                <NavLink to='/OurWork' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="Our Work">Our Work</p></NavLink>
                <NavLink to='/News' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="News">News</p></NavLink>
                <NavLink to='/Contact' className='nav-contact-link' onClick={()=>setHamburgerState(false)}><RoundButton>Contact</RoundButton></NavLink>
            </ul>

            <div className={HamburgerState?'hamburger-menu  hamburger-menu-opened':'hamburger-menu'} onClick={()=>setHamburgerState(!HamburgerState)}>
              <div className='line line1'></div>
              <div className='line line2'></div>
              <div className='line line3'></div>
            </div>

        </div>
    </header>
  )
}

export default Header;
