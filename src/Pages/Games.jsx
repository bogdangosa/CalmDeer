import './Games.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import GameCard from '../Components/Cards/GameCard';

function Games() {

  return (
    <div className='Games-background'>  
      <ScrollToTop/>
      <div className='Games'>
        <h2 className='home-subtitle'>Games we've worked on</h2>
        <div className='game-card-container'>
        <GameCard title="Game Name" image="./image1.png" animation_delay={1}/>
        <GameCard title="Another Game Name" image="./image6.png" animation_delay={2}/>
        <GameCard title="Interesting Game" image="./image3.png" animation_delay={3}/>
        <GameCard title="Custom Game" image="./hero_image.png" animation_delay={4}/>
        </div>
      </div>
    </div>
  )
}

export default Games; 
