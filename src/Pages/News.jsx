import { gql, GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCard from '../Components/Cards/NewsCard';
import Loading from '../Components/Auxiliary/Loading';
import './News.css';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfskro3j216101uefehihs30/master");


const NEWSQUERY = gql`
  query MultipleNews {
    multipleNews {
      date
      id
      slug
      title
      content{
        text
      }
      image{
        url
      }
    }
  }
`


function News() {
    const [NewsData,setNewsData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getNewsData();
    },[])

    const getNewsData = async ()=>{
        const {multipleNews} = await graphcms.request(NEWSQUERY);
        console.log(multipleNews);
        setNewsData(multipleNews);

    }

    if(NewsData==[])
      return <Loading />;


  return (
    <div className='News-background'>  
      <ScrollToTop/>
      <div className='News'>
          <h1 className='news-title'>Latest News</h1>
          <div className='news-table-container'>
            {NewsData.map((news_article,index)=>{
                return <NewsCard onClick={()=>navigate(`/News/${news_article.slug}`)}key={index} animation_delay={index} image={news_article.image.url} title={news_article.title} description={news_article.content.text} date={news_article.date}></NewsCard>
            })}
          </div>
      </div>
    </div>
  )
}

export default News; 
