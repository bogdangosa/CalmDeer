import './ServiceCard.css';
import { motion } from 'framer-motion';

function ServiceCard({title,icon,description,onClick,className}) {
  return (
    <div className={'ServiceCard '+className} onClick={()=>onClick()}>
        <div className='service_card_title_container'>
            <div className='service_card_icon'>
                <img src={icon}/>
            </div>
            <h3 className='service_card_title' >{title}</h3>
        </div>
        <p className='service_card_description'>{description}</p>
    </div>);
}
export default ServiceCard; 
