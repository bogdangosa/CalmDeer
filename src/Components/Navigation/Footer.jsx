import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    
    <footer className='Footer'>
        <div className='footer-container'>
            <p className='logo logo-footer'>CalmDeer</p>

            <div className='footer-menu'>
                <div className='footer-nav'>
                    <p className='footer-title'>Explore</p>
                    <NavLink to='/' className={({ isActive }) => isActive ? "footer-nav-links-active footer-nav-links" : "footer-nav-links"}><p>Home</p></NavLink>
                    <NavLink to='/OurWork' className={({ isActive }) => isActive ? "footer-nav-links-active footer-nav-links" : "footer-nav-links"}><p>Our Work</p></NavLink>
                    <NavLink to='/News' className={({ isActive }) => isActive ? "footer-nav-links-active footer-nav-links" : "footer-nav-links"} ><p>News</p></NavLink>
                    <NavLink to='/Contact' className={({ isActive }) => isActive ? "footer-nav-links-active footer-nav-links" : "footer-nav-links"} ><p>Contact</p></NavLink>
                </div>
                <div className='footer-contact'>
                    <p className='footer-title'>Contact</p>
                    <p>your_email@gmail.com</p>
                    <div className='footer-social-links-container'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2003 11.64C31.8332 10.0792 31.0797 8.07486 31.0803 6H24.9003V30.8C24.8526 32.142 24.2861 33.4132 23.3198 34.3459C22.3536 35.2785 21.0632 35.7998 19.7203 35.8C16.8803 35.8 14.5203 33.48 14.5203 30.6C14.5203 27.16 17.8403 24.58 21.2603 25.64V19.32C14.3603 18.4 8.32031 23.76 8.32031 30.6C8.32031 37.26 13.8403 42 19.7003 42C25.9803 42 31.0803 36.9 31.0803 30.6V18.02C33.5863 19.8197 36.595 20.7853 39.6803 20.78V14.6C39.6803 14.6 35.9203 14.78 33.2003 11.64Z" fill="white"/></svg>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8809 10C13.8803 11.0609 13.4584 12.0781 12.7079 12.8279C11.9574 13.5777 10.9397 13.9986 9.87886 13.998C8.81799 13.9975 7.80079 13.5756 7.05102 12.8251C6.30125 12.0745 5.88033 11.0569 5.88086 9.99605C5.88139 8.93518 6.30333 7.91798 7.05385 7.16821C7.80437 6.41844 8.82199 5.99752 9.88286 5.99805C10.9437 5.99858 11.9609 6.42051 12.7107 7.17103C13.4605 7.92155 13.8814 8.93918 13.8809 10ZM14.0009 16.96H6.00086V42H14.0009V16.96ZM26.6409 16.96H18.6809V42H26.5609V28.86C26.5609 21.54 36.1009 20.86 36.1009 28.86V42H44.0009V26.14C44.0009 13.8 29.8809 14.26 26.5609 20.32L26.6409 16.96Z" fill="white"/></svg>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.9201 12C43.3801 12.7 41.7201 13.16 40.0001 13.38C41.7601 12.32 43.1201 10.64 43.7601 8.62C42.1001 9.62 40.2601 10.32 38.3201 10.72C36.7401 9 34.5201 8 32.0001 8C27.3001 8 23.4601 11.84 23.4601 16.58C23.4601 17.26 23.5401 17.92 23.6801 18.54C16.5601 18.18 10.2201 14.76 6.00008 9.58C5.26008 10.84 4.84008 12.32 4.84008 13.88C4.84008 16.86 6.34008 19.5 8.66008 21C7.24008 21 5.92008 20.6 4.76008 20V20.06C4.76008 24.22 7.72008 27.7 11.6401 28.48C10.3815 28.8244 9.06027 28.8723 7.78008 28.62C8.32329 30.325 9.38715 31.8168 10.8221 32.8859C12.2571 33.9549 13.991 34.5474 15.7801 34.58C12.7473 36.9809 8.98807 38.2786 5.12008 38.26C4.44008 38.26 3.76008 38.22 3.08008 38.14C6.88008 40.58 11.4001 42 16.2401 42C32.0001 42 40.6601 28.92 40.6601 17.58C40.6601 17.2 40.6601 16.84 40.6401 16.46C42.3201 15.26 43.7601 13.74 44.9201 12Z" fill="white"/></svg>
                    </div>
                </div>

            </div>

            <p className='foot-note'>Copywright ©2023 <span className='bold'>RubyClover</span> All Rights Reserved</p>
        </div>
    </footer>);
}
export default Footer; 
