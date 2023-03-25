import RoundButton from '../Components/Buttons/RoundButton';
import './Home.css';

function Home() {

  return (
    <div className='Home'>
        <div className='hero-section'>
          <h1 className='hero-title'>Lorem <span className='accent'>ipsum dolor</span> consectetur adipiscing.</h1>
          <div className='hero-text-container'> 
            <p className='hero-text'>Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
            <div className='hero-cta-buttons-container'>
            <RoundButton>Our Work</RoundButton>
            <RoundButton>Get in Touch</RoundButton>
            </div>
            <div className='hero-background'></div>
            <div className='moving-hero-background'></div>
          </div>
          <div className='hero-image-background'>
            <div className='hero-image-overlay'/>
            <img src='./hero_image.png'></img>
          </div>
        </div>
    </div>
  )
}

export default Home; 
