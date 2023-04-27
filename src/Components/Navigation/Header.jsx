import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import RoundButton from '../Buttons/RoundButton';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const [HamburgerState,setHamburgerState] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();


  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(()=>{
    console.log(location.pathname.slice(0,10));
  },[])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={location.pathname=='/'&&scrollPosition==0?"Header HomeHeader":(location.pathname.slice(0,11)=='/Portfolio/'&&scrollPosition==0?"Header HomeHeader":(location.pathname.slice(0,10)=='/Services/'&&scrollPosition==0?"Header HomeHeader":"Header"))}>
        <div className='header-container'>
            <p className={location.pathname=='/'&&scrollPosition==0?'logo home-logo':(location.pathname.slice(0,10)=='/Services/'&&scrollPosition==0?"logo home-logo":"logo")} onClick={()=>navigate('/')}>CalmDeer</p>
            <ul className={HamburgerState?'nav-bar':'nav-bar nav-bar-hidden'}>
                <NavLink to='/' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="Home">Home</p></NavLink>
                <NavLink to='/Portfolio' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="Portfolio">Portfolio</p></NavLink>
                <NavLink to='/Games' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="Games">Games</p></NavLink>
                <NavLink to='/News' className={({ isActive }) => isActive ? "nav-links-active nav-links" : "nav-links"} onClick={()=>setHamburgerState(false)}><p data-text="News">News</p></NavLink>
                <NavLink to='/Contact' className='nav-contact-link' onClick={()=>setHamburgerState(false)}><RoundButton className="nav-contact-btn">Contact</RoundButton></NavLink>
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
