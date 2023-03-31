import { useParams } from 'react-router-dom';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import './ProjectPage.css';

function ProjectPage() {
    let {projectid} = useParams();

  return (
    <div className='project-container'>
        <div className='cover-image-overlay'/>
        <ScrollToTop/>
        <img className='cover-image-project' src='/image1.png'></img>
        <div className='ProjectPage'>
            <p className='project-title'>{projectid}</p>
            <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet neque in lectus elementum, id maximus orci sodales. Integer faucibus venenatis massa ut pulvinar. Mauris facilisis nisl sit amet tristique posuere. Mauris egestas dui in augue semper ultricies. Donec a pharetra justo, nec venenatis mauris. Vivamus tempus sem vulputate nisi lobortis tincidunt. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula tellus ut lectus pharetra tempor. Donec nunc dui, aliquet in vestibulum ornare, imperdiet vel enim. Donec vel neque nec mi efficitur porta ut a tellus. Ut at mollis erat. Ut nunc sem, vestibulum in tortor pretium, pellentesque mattis arcu. Suspendisse vehicula iaculis magna. Praesent vel dictum metus. Donec ut felis sit amet erat laoreet placerat vel eget ex. Suspendisse massa velit, pretium ac scelerisque nec, sagittis sed urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per </p>
            <div className='project-image-galery'>
                
                <img className='project-image' src='/image2.png'></img>
                <img className='project-image' src='/image3.png'></img>
                <img className='project-image' src='/image2.png'></img>
                <img className='project-image' src='/image1.png'></img>
            </div>
        </div>
    </div>)
}
export default ProjectPage; 
