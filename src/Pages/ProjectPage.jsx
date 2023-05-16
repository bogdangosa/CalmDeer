import { useParams } from 'react-router-dom';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import './ProjectPage.css';
import {categories_3d, categories_2d} from '../Utils/ProjectPageTree'
import { useEffect, useState } from 'react';
import ImagePopUp from '../PopUp/ImagePopUp';
import VideoPopUp from '../PopUp/VideoPopUp';

function ProjectPage() {
    const [Videos,setVideos] = useState([]);
    const [Images,setImages] = useState([]);
    const [SelectedImage,setSelectedImage] = useState(undefined);
    const [SelectedVideo,setSelectedVideo] = useState(undefined);
    const [HeroImage,SetHeroImage] = useState("/hero1_image.png");
    let {projectid} = useParams();

    useEffect(()=>{
        console.log(projectid);
        switch(projectid){
            case "3D Visual effects":
                setVideos(categories_3d.vfx.videos);
                SetHeroImage(categories_3d.vfx.hero);
                break;
            case "3D Characters Design":
                setImages(categories_3d.characters.images);
                setVideos(categories_3d.characters.videos);
                SetHeroImage(categories_3d.characters.hero);
                break;
            case "3D Game Modeling":
                setImages(categories_3d.models.images);
                SetHeroImage(categories_3d.models.hero);
                break;
            case "3D Environment Design":
                setVideos(categories_3d.enviroments.videos);
                setImages(categories_3d.enviroments.images);
                SetHeroImage(categories_3d.enviroments.hero);
                break;
            case "3D Animation":
                setVideos(categories_3d.animation.videos);
                setImages(categories_3d.animation.images);
                SetHeroImage(categories_3d.animation.hero);
                break;
            
            case "2D Characters Design":
                setImages(categories_2d.characters.images);
                setVideos(categories_2d.characters.videos);
                SetHeroImage(categories_2d.characters.hero);
                break;

            case "2D Environment Design":
                setVideos(categories_2d.enviroments.videos);
                setImages(categories_2d.enviroments.images);
                SetHeroImage(categories_2d.enviroments.hero);
                break;
            case "Pixel Art":
                setVideos(categories_2d.pixel.videos);
                setImages(categories_2d.pixel.images);
                SetHeroImage(categories_2d.pixel.hero);
                break;
            case "Item Models":
                setVideos(categories_2d.items.videos);
                setImages(categories_2d.items.images);
                SetHeroImage(categories_2d.items.hero);
                break;
        }

    })

  return (
    <div className='project-container'>
        <div className='cover-image-overlay'/>
        <ScrollToTop/>
        <img className='cover-image-project' src={HeroImage}></img>
        <div className='ProjectPage'>
            <p className='project-title'>{projectid}</p>
            <div className='project-image-galery'>

                {
                    Videos.map((video,index)=>{
                        return (
                        <video autoPlay loop muted className='project-image' key={index} onClick={()=>setSelectedVideo(video)}>
                            <source src={video} type="video/mp4" loop muted></source>
                        </video>);
                    })
                }
                {
                    Images.map((image,index)=>{
                        return (
                            <img className='project-image' src={image} key={index} onClick={()=>setSelectedImage(image)}></img>);
                    })
                }
            </div>
        </div>
        {SelectedImage!=undefined && <ImagePopUp image={SelectedImage} close={()=>setSelectedImage(undefined)}/>}
        {SelectedVideo!=undefined && <VideoPopUp video={SelectedVideo} close={()=>setSelectedVideo(undefined)}/>}
    </div>)
}
export default ProjectPage; 
