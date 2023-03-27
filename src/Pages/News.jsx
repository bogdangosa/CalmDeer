import NewsCard from '../Components/Cards/NewsCard';
import './News.css';

function News() {

  return (
    <div className='News-background'>
      <div className='News'>
          <h1 className='news-title'>Latest News</h1>
          <div className='news-table-container'>
            <NewsCard animation_delay={1} image="./image1.png" title="Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. " description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." date="02.03.2023"></NewsCard>
            <NewsCard animation_delay={2} image="./image2.png" title="Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. " description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." date="02.03.2023"></NewsCard>
            <NewsCard animation_delay={3} image="./image3.png" title="Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. " description="Etiam dapibus est quis lacus eleifend volutpat. Etiam sed iaculis eros, et suscipit sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." date="02.03.2023"></NewsCard>
          </div>
      </div>
    </div>
  )
}

export default News; 
