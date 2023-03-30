import { gql, GraphQLClient } from 'graphql-request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './NewsArticle.css';


const graphcms = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfskro3j216101uefehihs30/master");



function NewsArticle() {
    const [ArticleData,setArticleData] = useState(null);
    let {articleid} = useParams();

    useEffect(()=>{
        if(articleid!=null)
            getNewsData();
    },[articleid])

    const getNewsData = async ()=>{
        const NEWSQUERY = gql`
        query News{
            news(where: { slug: "${articleid}"}){
            id,
            title,
            date,
            content{
                text
            }
            image{
                url
            }
            }
        }`


        const {news} = await graphcms.request(NEWSQUERY);
        console.log(news);
        setArticleData(news);

    }


    if(ArticleData==null)
        return <p>Loading...</p>


  return(
  <div className="NewsArticle">
        <h1>{ArticleData.title}</h1>
        <p className='newsarticle-date'>{ArticleData.date}</p>
        <div className='newsarticle-content'>
            <img className='newsarticle-image' src={ArticleData.image.url}/>
            <p className='newsarticle-text'>{ArticleData.content.text}</p>
        </div>
  </div>)
}
export default NewsArticle; 
