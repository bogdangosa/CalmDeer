import { gql, GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';
import NewsCard from '../Components/Cards/NewsCard';
import './News.css';

const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfskro3j216101uefehihs30/master");


const NEWSQUERY = gql`
  query MultipleNews {
    multipleNews {
      createdAt
      date
      id
      publishedAt
      slug
      title
      updatedAt
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

    useEffect(()=>{
        getNewsData();
    },[])

    const getNewsData = async ()=>{
        const {multipleNews} = await graphcms.request(NEWSQUERY);
        console.log(multipleNews);
        setNewsData(multipleNews);

    }



  return (
    <div className='News-background'>
      <div className='News'>
          <h1 className='news-title'>Latest News</h1>
          <div className='news-table-container'>
            {NewsData.map((news_article,index)=>{
                return <NewsCard key={index} animation_delay={index} image={news_article.image.url} title={news_article.title} description={news_article.content.text} date={news_article.date}></NewsCard>
            })}
          </div>
      </div>
    </div>
  )
}

export default News; 
