import RoundButton from '../Components/Buttons/RoundButton';
import SimpleButton from '../Components/Buttons/SimpleButton';
import './Home.css';
import {motion} from 'framer-motion'
import SimpleButton2 from '../Components/Buttons/SimpleButton2';
import ArrowButton from '../Components/Buttons/ArrowButton';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const HeroImageVariants = {
    in: {
        opacity: 1,
        y: "0",
    },
    out: {
        opacity: 0,
        y: "-100vh",
    },
    };
    const HeroImageTransition = {
        type: "tween",
        duration: 1,
  };

  const HeroTextVariants = {
    in: {
        opacity: 1,
        x: "0",
    },
    out: {
        opacity: 0,
        x: "-150vh",
    },
  };
  const HeroTextBgVariants = {
    in: {
        opacity: 1,
        x: "0",
    },
    out: {
        opacity: 0,
        x: "-170vh",
    },
  }

  const HeroTitleVariants = {
    in: {
        opacity: 1,
        y: "0",
    },
    out: {
        opacity: 0,
        y: "20vh",
    },
  }

  const HeroTextTransition = {
    type: "tween",
    delay:0.4,
    duration: 1,
  };
  const HeroTitleTransition = {
    type: "tween",
    delay:0.3,
    duration: 1,
  };



  return (
    <div className='Home'>
        <div className='hero-section'>

          <motion.h1  className='hero-title'               
              initial="out"animate="in"exit="out"
              variants={HeroTitleVariants}
              transition={HeroTitleTransition}> Lorem <span className='accent'>ipsum dolor</span> consectetur adipiscing.</motion.h1>

          <motion.div className='hero-text-container'
              initial="out"animate="in"exit="out"
              variants={HeroTextVariants}
              transition={HeroTextTransition}> 
            <p className='hero-text'>Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
            
            <div className='hero-cta-buttons-container'>
              <SimpleButton className="hero-cta-btn" onClick={()=>navigate('/OurWork')}>Our Work</SimpleButton>
              <SimpleButton2 className="hero-cta-btn-2" onClick={()=>navigate('/Contact')}>Get in Touch</SimpleButton2>
            </div>

            <motion.div className='hero-background' initial="out"animate="in"exit="out"
              variants={HeroTextBgVariants}
              transition={HeroTextTransition} />

            <div className='moving-hero-background'></div>

          </motion.div>
          <motion.div className='hero-image-background'
              initial="out"
              animate="in"
              exit="out"
              variants={HeroImageVariants}
              transition={HeroImageTransition}>
            <div className='hero-image-overlay'/>
            <img src='./hero_image.png'></img>
          </motion.div>
        </div>
        <div className='home-work-section'>
            <img src='./ourwork-image.png' className='home-work-image'/>

            <div className='home-work-text'>
              <h2>What we do</h2>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. Mauris viverra tincidunt risus et imperdiet. Pellentesque nec congue ipsum. Aenean pellentesque suscipit enim eu dapibus. Aliquam nec faucibus quam, id lobortis est.</p>
              <ArrowButton onClick={()=>navigate('/OurWork')}>Find out more</ArrowButton>
            </div>
        </div>


    </div>
  )
}

export default Home; 
