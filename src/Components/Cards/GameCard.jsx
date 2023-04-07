import './GameCard.css';
import { motion } from 'framer-motion';

function GameCard({title,image,animation_delay,onClick,className}) {

  const Variants = {
    in: {
        y: "0",
    },
    out: {
        y: "20vh",
    },
  };
  const Transition = {
      type: "tween",
      delay: animation_delay / 8,
      duration: 1,
  };


  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={Variants}
    transition={Transition}>
      <div className={'GameCard '+className} onClick={()=>onClick()}>
          <h3 className='game_card_title' >{title}</h3>
          <img src={image} className="game_card_image"/>
      </div>
    </motion.div>
    );
}
export default GameCard; 
