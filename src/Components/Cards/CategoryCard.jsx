import './CategoryCard.css';
import { motion } from 'framer-motion';

function CategoryCard({title,image,animation_delay,onClick,className}) {


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
        <div className={'CategoryCard '+className}>
            <h3 className='category_card_title' >{title}</h3>
            <img src={image} className="category_card_image"/>
        </div>
    </motion.div>);
}
export default CategoryCard; 
