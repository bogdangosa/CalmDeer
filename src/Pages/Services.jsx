import './Services.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SimpleButton from '../Components/Buttons/SimpleButton';
import ServiceCard from '../Components/Cards/ServiceCard';
import { useEffect, useState } from 'react';
function Services() {
  const [ServiceTitle,setServiceTitle] = useState("Loading");
  const [ServiceTitle2,setServiceTitle2] = useState("Loading");
  const [ServiceDescription,setServiceDescription] = useState("Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque non velit quis neque varius sollicitudin sit amet mattis tortor. Duis molestie justo ut tincidunt dapibus.");
  const [ServiceImage,setServiceImage] = useState("");
  const [SubcategoryArray,setSubcategoryArray] = useState([]);
  let {serviceid} = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    console.log(serviceid);
      if(serviceid!=null){
        switch(serviceid){
          case "2D-Art":
            setServiceTitle("Unlock the World of Exquisite 2D Production with Calmdeer Studio");
            setServiceTitle2("Unleash Your Imagination with Calmdeer");
            setServiceDescription("At Calmdeer Studio, we believe in the transformative power of 2D production. With our unparalleled expertise in 2D Art, we bring your ideas to life with a touch of artistry and a commitment to excellence. Let us take you on a visual journey where imagination knows no bounds and every stroke of creativity sparks wonder.")
            setSubcategoryArray(new Array(
              {title:"2D Characters Design",image:"./image2.png",icon:"../icon_person.svg"},
              {title:"2D Environment Design",image:"./image5.png",icon:"../icon_landscape.svg"},
              {title:"Pixel Art",image:"./image5.png",icon:"../icon_person.svg"},
              {title:"Pixel Animation",image:"./image5.png",icon:"../icon_person.svg"},
              {title:"Spine Animation",image:"./image5.png",icon:"../icon_person.svg"},
              {title:"Frame by Animation",image:"./image5.png",icon:"../icon_person.svg"},
              {title:"UI/UX Design",image:"./image6.png",icon:"../icon_person.svg"},));
            setServiceImage("/2D/ENV/env4.png")
            break;
          case "3D-Art":
            setServiceTitle("Experience the Artistry of 3D Production at Calmdeer Studio");
            setServiceTitle2("Unleash Your Imagination with Calmdeer");
            setServiceImage("/3D/Characters/ch10.jpg")
            setSubcategoryArray(new Array({title:"3D Characters Design",image:"./image4.png",icon:"../icon_person.svg"},{title:"3D Environment Design",image:"./image1.png",icon:"../icon_landscape.svg"},{title:"3D Visual effects",image:"./image6.png",icon:"../icon_person.svg"},{title:"3D Game Modeling",image:"./image5.png",icon:"../icon_bullets.svg"},{title:"3D Animation",image:"./image5.png",icon:"../icon_person.svg"}));
            break;
          case "Concept-Art":
            setServiceTitle("Welcome to the World of Creative Conceptualization");
            setServiceTitle2("Unleash Your Imagination with Calmdeer");
            setServiceImage("/3D/Characters/ch10.jpg")
            setSubcategoryArray(new Array({title:"3D Characters Design",image:"./image4.png",icon:"../icon_person.svg"},{title:"3D Environment Design",image:"./image1.png",icon:"../icon_landscape.svg"},{title:"3D Visual effects",image:"./image6.png",icon:"../icon_person.svg"},{title:"3D Game Modeling",image:"./image5.png",icon:"../icon_bullets.svg"},{title:"3D Animation",image:"./image5.png",icon:"../icon_person.svg"}));
            break;
          default:
            setServiceTitle("Error");
            break

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
            <p>{ServiceDescription}</p>
            
            <SimpleButton onClick={()=>navigate("/Contact")}>Work with us</SimpleButton>
        </div>
        <div className='services-info-container'>
          <h2 className='home-subtitle services-subtitle'>{ServiceTitle2}</h2>
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
