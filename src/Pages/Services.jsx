import './Services.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SimpleButton from '../Components/Buttons/SimpleButton';
import ServiceCard from '../Components/Cards/ServiceCard';
import { useEffect, useState } from 'react';
import { services_text } from '../Utils/ServicesText';
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
            setServiceTitle(services_text.art_2d.title1);
            setServiceTitle2(services_text.art_2d.title2);
            setServiceDescription(services_text.art_2d.description)
            setSubcategoryArray(services_text.art_2d.categories);
            setServiceImage("/2D/ENV/env4.png")
            break;
          case "3D-Art":
            setServiceTitle(services_text.art_3d.title1);
            setServiceTitle2(services_text.art_3d.title2);
            setServiceImage(services_text.art_3d.image)
            setServiceDescription(services_text.art_3d.description)
            setSubcategoryArray(services_text.art_3d.categories);
            break;
          case "Concept-Art":
            setServiceTitle(services_text.concept.title1);
            setServiceTitle2(services_text.concept.title2);
            setServiceImage(services_text.concept.image)
            setServiceDescription(services_text.concept.description)
            setSubcategoryArray(services_text.concept.categories);
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
              return (<ServiceCard onClick={()=>navigate(`${location.pathname}/${subcategory.title}`)} key={index} icon={subcategory.icon} title={subcategory.title} description={subcategory.description} />)
            })}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services; 
