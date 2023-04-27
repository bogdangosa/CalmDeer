import './ServiceCard.css';
import { motion } from 'framer-motion';

function ServiceCard({title,icon,description,onClick,className}) {
  return (
    <div className={'ServiceCard '+className} onClick={()=>onClick()}>
        <div>
            <img src={icon} className='service_card_icon'/>
            <h3 className='service_card_title' >{title}</h3>
        </div>
        <p className='service_card_description'>{description}</p>
    </div>);
}
export default ServiceCard; 
