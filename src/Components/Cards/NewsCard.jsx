import './NewsCard.css';
import { motion } from 'framer-motion';

function NewsCard({title,image,description,date,animation_delay,onClick,className}) {


    const Variants = {
        in: {
            opacity: 1,
            y: "0",
        },
        out: {
            opacity: 0,
            y: "20vh",
        },
    };
    const Transition = {
        type: "tween",
        delay: animation_delay / 6,
        duration: 1,
    };


  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={Variants}
    transition={Transition}>
        <div className={'NewsCard '+className}>
            <img src={image} className="news_card_image"/>
            <div className='news_card_text'>
                <h3 className='news_card_title' >{title}</h3>
                <p className='news_card_description' >{description}</p>
            </div>
            <p className='news_card_date'>{date}</p>
        </div>
    </motion.div>);
}
export default NewsCard; 
