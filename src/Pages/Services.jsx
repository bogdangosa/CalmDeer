import './Services.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SimpleButton from '../Components/Buttons/SimpleButton';
import ServiceCard from '../Components/Cards/ServiceCard';
import { useEffect, useState } from 'react';
function Services() {
  const [ServiceTitle,setServiceTitle] = useState("Loading");
  const [ServiceImage,setServiceImage] = useState("");
  const [SubcategoryArray,setSubcategoryArray] = useState([]);
  let {serviceid} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    console.log(serviceid);
      if(serviceid!=null){
        if(serviceid=="2D-Art"){
          setServiceTitle("2D Art");
          setSubcategoryArray(new Array({title:"2D Characters Design",image:"./image2.png",icon:"../icon_person.svg"},{title:"2D Concept Art",image:"./image6.png",icon:"../icon_person.svg"},{title:"2D Environment Design",image:"./image5.png",icon:"../icon_landscape.svg"},{title:"Pixel art",image:"./image5.png",icon:"../icon_person.svg"},{title:"Pixel animation",image:"./image5.png",icon:"../icon_person.svg"},{title:"UI/UX Design",image:"./image6.png",icon:"../icon_person.svg"},{title:"Frame by frame animation",image:"./image6.png",icon:"../icon_person.svg"},{title:"Slots Games Art",image:"./image1.png",icon:"../icon_person.svg"}));
          setServiceImage("../hero_image.png")
        }
        else{
          setServiceTitle("3D Art");
          setServiceImage("../image5.png")
          setSubcategoryArray(new Array({title:"3D Characters Design",image:"./image4.png",icon:"../icon_person.svg"},{title:"3D Visual effects",image:"./image6.png",icon:"../icon_person.svg"},{title:"3D Environment Design",image:"./image1.png",icon:"../icon_landscape.svg"},{title:"3D Game Modeling",image:"./image5.png",icon:"../icon_bullets.svg"}));

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
          <h2 className='home-subtitle services-subtitle'>Our {ServiceTitle} Services</h2>
          <div className='services-grid-container'>
            {SubcategoryArray.map((subcategory,index)=>{
              return (<ServiceCard onClick={()=>navigate(`${location.pathname}/${subcategory.title}`)} key={index} icon={subcategory.icon} title={subcategory.title} description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus." />)
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services; 
