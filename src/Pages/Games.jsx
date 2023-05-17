import './Games.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import GameCard from '../Components/Cards/GameCard';
import { useNavigate } from 'react-router-dom';

function Games() {

  return (
    <div className='Games-background'>  
      <ScrollToTop/>
      <div className='Games'>
        <h2 className='home-subtitle'>Games we've worked on</h2>
        <div className='game-card-container'>
        <GameCard title="Million to One Hero" image="./games/game1.jpg" animation_delay={1} onClick={()=>window.open('https://store.steampowered.com/app/595270/Million_to_One_Hero/', '_blank')}/>
        <GameCard title="Tails: The Backbone Preludes" image="./games/game2.jpg" animation_delay={2} onClick={()=>window.open('https://store.steampowered.com/app/2020030/Tails_The_Backbone_Preludes/', '_blank')}/>
        <GameCard title="Friends vs Friends" image="./games/game3.jpg" animation_delay={3} onClick={()=>window.open('https://store.steampowered.com/app/1785150/Friends_vs_Friends/', '_blank')}/>
        <GameCard title="Farlands" image="./games/game4.jpg" animation_delay={4} onClick={()=>window.open('https://store.steampowered.com/app/595270/Million_to_One_Hero/', '_blank')}/>
        </div>
      </div>
    </div>
  )
}

export default Games; 
