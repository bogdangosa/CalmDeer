import { NavLink } from 'react-router-dom';
import RoundButton from '../Buttons/RoundButton';
import './Header.css';

function Header() {


  return (
    <header className="Header">
        <p className='logo'>CalmDeer</p>
        <ul className='nav-bar'>
            <NavLink to='/' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"}><p data-text="Home">Home</p></NavLink>
            <NavLink to='/OurWork' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"}><p data-text="Our Work">Our Work</p></NavLink>
            <NavLink to='/News' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"}><p data-text="News">News</p></NavLink>
            <NavLink to='/Contact' className='nav-contact-link'><RoundButton>Contact</RoundButton></NavLink>
        </ul>
    </header>
  )
}

export default Header;
