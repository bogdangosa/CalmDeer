import './Services.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import { useNavigate, useParams } from 'react-router-dom';
import SimpleButton from '../Components/Buttons/SimpleButton';
import ServiceCard from '../Components/Cards/ServiceCard';
import { useEffect, useState } from 'react';
function Services() {
  const [ServiceTitle,setServiceTitle] = useState("Loading");
  const [ServiceImage,setServiceImage] = useState("");
  let {serviceid} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(serviceid);
      if(serviceid!=null){
        if(serviceid=="2D-Art"){
          setServiceTitle("2D Art");
          setServiceImage("../hero_image.png")
        }
        else{
          setServiceTitle("3D Art");
          setServiceImage("../image5.png")
        }

      }
  },[serviceid])

  return (
    <div className='Services-background'>  
      <ScrollToTop/>
      <div className='Services'>
        <div className='hero-services'>
            <img src={ServiceImage} className='hero-services-image'/>
            <div className='hero-services-overlay'/>
            <h1>{ServiceTitle}</h1>
            <p>Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus. </p>
            
            <SimpleButton onClick={()=>navigate("/Contact")}>Work with us</SimpleButton>
        </div>
        <div className='services-info-container'>
          <h2 className='home-subtitle'>Our {ServiceTitle} Services</h2>
          <div className='services-grid-container'>
            <ServiceCard title="Characters" description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />
            <ServiceCard title="Enviroments" description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />
            <ServiceCard title="Concept" description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />
            <ServiceCard title="Weapons" description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />
            <ServiceCard title="Illustrations" description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />
          
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services; 
