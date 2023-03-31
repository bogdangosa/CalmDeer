import RoundButton from '../Components/Buttons/RoundButton';
import SimpleButton from '../Components/Buttons/SimpleButton';
import './Home.css';
import {motion} from 'framer-motion'
import SimpleButton2 from '../Components/Buttons/SimpleButton2';
import ArrowButton from '../Components/Buttons/ArrowButton';
import { useNavigate } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';

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
      <ScrollToTop/>
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
              <SimpleButton className="hero-cta-btn-2" onClick={()=>navigate('/Contact')}>Get in Touch</SimpleButton>
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
              <h2 className='home-subtitle'>What we do</h2>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. Mauris viverra tincidunt risus et imperdiet. Pellentesque nec congue ipsum. Aenean pellentesque suscipit enim eu dapibus. Aliquam nec faucibus quam, id lobortis est.</p>
              <ArrowButton onClick={()=>navigate('/OurWork')}>Find out more</ArrowButton>
            </div>
        </div>

        <div className='home-work-section'>
            <div className='home-work-text'>
              <h2 className='home-subtitle'>How we work</h2>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. Mauris viverra tincidunt risus et imperdiet. Pellentesque nec congue ipsum. Aenean pellentesque suscipit enim eu dapibus. Aliquam nec faucibus quam, id lobortis est. Nulla at sapien quis mi accumsan blandit nec ut turpis. Nulla elementum rutrum purus sed dictum. Quisque imperdiet nulla eget eros sagittis vulputate.\nNullam porttitor, odio ac rhoncus hendrerit, dui lectus dignissim dui, eget varius ante risus quis diam. Nulla non turpis et eros vestibulum sagittis sit amet et eros. Morbi feugiat ligula velit, at varius felis imperdiet id. Nunc volutpat iaculis odio, eget ullamcorper justo malesuada quis. Sed bibendum sapien nisi, et dapibus est pharetra et. Ut bibendum mattis arcu eu venenatis. Nulla quis pharetra justo, a rhoncus sem.</p>
              <ArrowButton onClick={()=>navigate('/Contact')}>Work with us</ArrowButton>
            </div>
            <img src='./ourwork-image.png' className='home-work-image'/>
        </div>

        <div className='home-partner-section'>
          <h2 className='home-subtitle'>Our Partners</h2>
          <Swiper
            modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                1200: {
                slidesPerView: 4,
                },
                700: {
                slidesPerView: 2,
                }
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide className='partner-slide'><img src="./partners_logo/Firemonkeys_Studios_logo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/Blizzard_Entertainment_Logo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/respawn_logo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/naughty_dog_logo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/ea_sports_logo.png"/></SwiperSlide>
            </Swiper>
        </div>


    </div>
  )
}

export default Home; 
