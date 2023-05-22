import RoundButton from '../Components/Buttons/RoundButton';
import SimpleButton from '../Components/Buttons/SimpleButton';
import './Home.css';
import {animate, motion} from 'framer-motion'
import SimpleButton2 from '../Components/Buttons/SimpleButton2';
import ArrowButton from '../Components/Buttons/ArrowButton';
import { useNavigate } from 'react-router-dom';
import {Swiper,SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import GameCard from '../Components/Cards/GameCard';

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
        y: "5vh",
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
    <div className='home-container'>
    <div className='Home'>
      <ScrollToTop/>
        <div className='hero-section'>

          <motion.h1  className='hero-title'               
              initial="out"animate="in"exit="out"
              variants={HeroTitleVariants}
              transition={HeroTitleTransition}>Discover a World of Uncompromising Quality</motion.h1>

          <div className='hero-buttons-container'>
            <SimpleButton onClick={()=>navigate("/Portfolio")}>See Portfolio</SimpleButton>
            <SimpleButton onClick={()=>navigate("/Contact")}>Work with us</SimpleButton>
          </div>

          <motion.div className='hero-image-background'
              initial="out"
              animate="in"
              exit="out"
              variants={HeroImageVariants}
              transition={HeroImageTransition}>
            <Swiper id='hero-swiper'
             spaceBetween={1}
             slidesPerView={1}
             loop={true}
             autoplay={{
              delay: 21000,
              disableOnInteraction: false,
              }}        
              modules={[Autoplay]}>
              <SwiperSlide>
                <div className='hero-image-overlay'/>
                <video autoPlay loop muted
                onLoadedData={()=>console.log("video Loaded")}>
                  <source src='./mayinhara.mp4' type="video/mp4" loop muted></source>
                </video>
              </SwiperSlide>

              <SwiperSlide>
                <div className='hero-image-overlay'/>
                <video autoPlay loop muted>
                  <source src='./3D/ENV/env1.mp4' type="video/mp4" loop muted></source>
                </video>
              </SwiperSlide>

              <SwiperSlide>
                <div className='hero-image-overlay'/>
                <video autoPlay loop muted>
                  <source src='./3D/ENV/env2.mp4' type="video/mp4" loop muted></source>
                </video>
              </SwiperSlide>


            </Swiper>
          </motion.div>
        </div>


        <div className='moving-text-container'>
          <motion.p 
            initial={{x:"-50%",}}
            animate={{x:"-320%"}}
            transition={{duration:20,repeat: "Infinity",ease: "linear",}}
          
          className='background-moving-text' >Concept Art Casual Art Environment Design Character Design Slots Games Art Pixel art Pixel animation Frame by frame animation</motion.p>
          <motion.p 
            initial={{x:"-320%",}}
            animate={{x:"-50%"}}
            transition={{duration:20,repeat: "Infinity",ease: "linear",}}
          
          className='background-moving-text' >2D Art 2D Characters Design 2D Environment Design 3D Art 3D Characters Design 3D Environment Design 3D Game Modeling 3D Sculpting 3D Rigging UI/UX Design</motion.p>

        </div>


        <div className='home-work-section home-what-we-do'>
            <div className='home-work-image-container'>
              <motion.div className='red-rectangle-bg' 
              initial={{ opacity: 0 , y:400,height:"40rem"}}
              whileInView={{ opacity: 1 , y:0 , height: "22rem", transition: {
                type: "tween",
                duration: 0.8,
                delay:0.5,
              }}}
              viewport={{ once: true,}}></motion.div>
              <div className='work-image-swiper-pagination'></div>
              <motion.div
              initial={{ opacity: 0 , y:-100,height:"1rem",overflow:"hidden"}}
                whileInView={{ opacity: 1 , y:0,height:"35rem" , transition: {
                  type: "tween",
                  duration: 0.8,
                  delay:0.7,
                }}}
               viewport={{ once: true, amount: 0.5 }}>
                <Swiper
                  slidesPerView={1} 
                  modules={[Pagination,Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{ clickable: true,el: '.work-image-swiper-pagination' }}>
                    <SwiperSlide><img src='./3D/Characters/ch1.jpg' className='home-work-image'/></SwiperSlide>
                    <SwiperSlide><img src='./3D/Characters/ch9.jpg' className='home-work-image'/></SwiperSlide>
                    <SwiperSlide><img src='./3D/Characters/ch10.jpg' className='home-work-image'/></SwiperSlide>
                    <SwiperSlide><img src='./2D/ENV/env4.png' className='home-work-image'/></SwiperSlide>
                    <SwiperSlide><img src='./2D/Items/item1.png' className='home-work-image'/></SwiperSlide>

                </Swiper>
              </motion.div>
            </div>

            <motion.div className='home-work-text' 
              initial={{ opacity: 0 , y:100}}
              whileInView={{ opacity: 1 , y:0, transition: {
                type: "tween",
                duration: 0.7,
                delay:0.5,
              }}}>
              <h2 className='home-subtitle'>What we do</h2>
              <p>At Calmdeer, we are dedicated to crafting game assets and 3D models that exceed your expectations. Our relentless pursuit of excellence ensures that every creation is a testament to our unwavering commitment to quality. Step into a world where attention to detail, precision, and artistic brilliance converge to bring your visions to life.</p>
              <ArrowButton onClick={()=>navigate('/Portfolio')}>Find out more</ArrowButton>
            </motion.div>
        </div>

        {/*
        <div className='home-work-section home-how-we-work'>
            <motion.div className='home-work-text'
              initial={{ opacity: 0 , x:-100}}
              whileInView={{ opacity: 1 , x:0, transition: {
                type: "tween",
                duration: 0.7,
                delay:0.5,
              }}}>
              <h2 className='home-subtitle'>How we work</h2>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. Mauris viverra tincidunt risus et imperdiet. Pellentesque nec congue ipsum. Aenean pellentesque suscipit enim eu dapibus. <br/> <br/>Nullam porttitor, odio ac rhoncus hendrerit, dui lectus dignissim dui, eget varius ante risus quis diam. Nulla non turpis et eros vestibulum sagittis sit amet et eros. Morbi feugiat ligula velit, at varius felis imperdiet id. Nunc volutpat iaculis odio, eget ullamcorper justo malesuada quis. Sed bibendum sapien nisi, et dapibus est pharetra et. Ut bibendum mattis arcu eu venenatis. Nulla quis pharetra justo, a rhoncus sem.</p>
              <ArrowButton onClick={()=>navigate('/Contact')}>Work with us</ArrowButton>
            </motion.div>
            <motion.div className='home-work-image2'
              initial={{ opacity: 0 , y:100}}
              whileInView={{ opacity: 1 , y:0, transition: {
                type: "tween",
                duration: 0.7
              }}}
              viewport={{ once: true, amount: 0.8 }}>
              <img src='./image4.png'/>
            </motion.div>
        </div>
            */}
  </div>
        <div className='home-portfolio-section'>
          <h2 className='home-subtitle'>Our Portfolio</h2>

          <div className='service-type-container service-type-container-reverse'>
            <img src="./3D/Characters/ch8.jpg"/>
            <div className='service-type-text service-type-text-reverse'>
              <h3>Concept Art</h3>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. </p> 
              <SimpleButton className="black-btn" onClick={()=>navigate("/Portfolio/Concept-Art")}>See More</SimpleButton>
            </div>

          </div>

          <div className='service-type-container'>
            <div className='service-type-text'>
              <h3>2D Art</h3>
              <p>At Calmdeer Studio, we believe in the transformative power of 2D production. With our unparalleled expertise in 2D Art, we bring your ideas to life with a touch of artistry and a commitment to excellence. Let us take you on a visual journey where imagination knows no bounds and every stroke of creativity sparks wonder.</p> 
              <SimpleButton className="black-btn" onClick={()=>navigate("/Portfolio/2D-Art")}>See More</SimpleButton>
            </div>
            <img src="./2D/Characters/ch1.jpg"/>

          </div>

          <div className='service-type-container service-type-container-reverse'>
            <img src="./3D/Characters/ch8.jpg"/>
            <div className='service-type-text service-type-text-reverse'>
              <h3>3D Art</h3>
              <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. </p> 
              <SimpleButton className="black-btn" onClick={()=>navigate("/Portfolio/3D-Art")}>See More</SimpleButton>
            </div>

          </div>
            
        </div>


        <div className='home-work-section home-how-we-work'>
          <div src='./image6.png' className='home-how-we-work-background-image'>
            <video autoPlay loop muted>
                <source src='./endlessenginesfinale2.mp4' type="video/mp4" loop muted></source>
            </video>
          </div>
          <div className='home-how-we-work-background-overlay'></div>

          <h2 className='how-we-work-title'>Contact Us Today</h2>
          <p className='how-we-work-text'>Are you ready to elevate your projects with art that radiates quality? We invite you to reach out to our team today. Explore our portfolio, discuss your project needs, or inquire about our custom creation services. Together, let's bring your visions to life and leave an unforgettable impression through the power of impeccable artistry.</p>
          
          <SimpleButton onClick={()=>navigate('/Contact')}>Work with us</SimpleButton>

        </div>

    <div className='Home'>


        
        <div className='home-partner-section'>
          <h2 className='home-subtitle'>Our Partners</h2>
          <Swiper
            modules={[Pagination,Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
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
              <SwiperSlide><img src="./partners_logo/farlandslogo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/friends_logo.jpeg"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/milion_to_one_logo.png"/></SwiperSlide>
              <SwiperSlide><img src="./partners_logo/tails_logo.png"/></SwiperSlide>
            </Swiper>
        </div>

      </div>


    </div>
  )
}

export default Home; 
