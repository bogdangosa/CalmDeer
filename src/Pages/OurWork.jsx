import { useEffect, useState } from 'react';
import CategoryCard from '../Components/Cards/CategoryCard';
import './OurWork.css';

function OurWork() {
    const [Category,setCategory] = useState("Conceptual");
    const [SubcategoryArray,setSubcategoryArray] = useState([]);

    useEffect(()=>{
        setSubcategoryArray([]);
        setTimeout(()=>{

            
        if(Category=="Conceptual"){
            setSubcategoryArray([
            {
                title:"Character Design",
                image: "./image2.png",
            },
            {
                title:"Gaming Assets",
                image: "./image3.png",
            },
            ])
        }

        if(Category=="2D Production"){
            setSubcategoryArray([{
                title:"Pixel Art",
                image: "./image1.png",
            },
            {
                title:"Character Design",
                image: "./image2.png",
            },
            {
                title:"Enviroment Design",
                image: "./image1.png",
            },
            {
                title:"Gaming Assets",
                image: "./image3.png",
            },
            ])
        }

        if(Category=="3D Production"){
            setSubcategoryArray([{
                title:"Pixel Art",
                image: "./image1.png",
            },
            {
                title:"Character Design",
                image: "./image2.png",
            },
            {
                title:"Enviroment Design",
                image: "./image1.png",
            },
            {
                title:"Gaming Assets",
                image: "./image3.png",
            },
            {
                title:"Pixel Art",
                image: "./image1.png",
            },
            {
                title:"Character Design",
                image: "./image2.png",
            },
            ])
        }


        },200)

        

    },[Category])


  return (
    <div className='OurWork'>
        <h1 className="ourwork_title">We are proud of <span className='accent'>Our Work</span></h1>
        <p className="text our_work_subtitle">Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
        <div className='work_table_container'>
            <div className='category_menu'>
                <p className={Category=="Conceptual"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("Conceptual")}>Conceptual</p>
                <p className={Category=="2D Production"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("2D Production")}>2D Production</p>
                <p className={Category=="3D Production"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("3D Production")}>3D Production</p>
            </div>
            <div className='work_table'>
                {SubcategoryArray.map((subcategory,index)=>{
                    return <CategoryCard title={subcategory.title} image={subcategory.image} animation_delay={index+1}/>
                })}
            </div>


        </div>
    </div>
  )
}

export default OurWork; 
