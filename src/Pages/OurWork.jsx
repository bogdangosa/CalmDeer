import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import CategoryCard from '../Components/Cards/CategoryCard';
import { AnimatePresence, motion } from 'framer-motion';
import './OurWork.css';
import SelectField from '../Components/formElements/SelectField';
import Loading from '../Components/Auxiliary/Loading';
import SimpleButton from '../Components/Buttons/SimpleButton';

function OurWork() {
    const navigate = useNavigate();
  return (
    <>   
    
    <img src='./hero2_image.png' className='hero-services-image'/>
    <div className='hero-services-overlay'/>
    <div className='Portfolio'>
        <ScrollToTop/>
        <div className='hero-portfolio'>
            <h1>Discover our amazing portfolio</h1>
            <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            
            <div className='hero-buttons-container-portfolio'>
                <SimpleButton onClick={()=>navigate("/Portfolio/2D-Art")}>2D Art</SimpleButton>
                <SimpleButton onClick={()=>navigate("/Portfolio/3D-Art")}>3D Art</SimpleButton>
            </div>
        </div>
        
    </div>

    </>

  )
}

export default OurWork; 
