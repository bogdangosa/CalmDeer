import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import ScrollToTop from '../Components/Auxiliary/ScrolltoTop';
import CategoryCard from '../Components/Cards/CategoryCard';
import { AnimatePresence, motion } from 'framer-motion';
import './OurWork.css';
import SelectField from '../Components/formElements/SelectField';
import Loading from '../Components/Auxiliary/Loading';

function OurWork() {
    const [Category,setCategory] = useState("Conceptual");
    const [SubcategoryArray,setSubcategoryArray] = useState([]);
    const [SelectedSubcategory,setSelectedSubcategory] = useState(0);

    const category_options = new Array("Conceptual","2D Production","3D Production");

    const navigate = useNavigate();

    useEffect(()=>{
        setSubcategoryArray([]);
        setSelectedSubcategory(0);
        setTimeout(()=>{
            if(Category=="Conceptual")
                setSubcategoryArray(new Array({title:"Concept Art",image:"./image6.png"},{title:"Casual Art",image:"./image5.png"},{title:"Slots Games Art",image:"./image1.png"},))
            if(Category=="2D Production")
                setSubcategoryArray(new Array({title:"2D Art",image:"./image6.png"},{title:"2D Characters Design",image:"./image2.png"},{title:"2D Environment Design",image:"./image5.png"},{title:"Pixel art",image:"./image5.png"},{title:"Pixel animation",image:"./image5.png"},{title:"UI/UX Design",image:"./image6.png"},{title:"Frame by frame animation",image:"./image6.png"}));
            if(Category=="3D Production")
                setSubcategoryArray(new Array({title:"3D Art",image:"./image2.png"},{title:"3D Characters Design",image:"./image4.png"},{title:"3D Environment Design",image:"./image1.png"},{title:"3D Game Modeling",image:"./image5.png"},{title:"3D Sculpting",image:"./image6.png"},{title:"3D Rigging",image:"./image5.png"}));

        },200)

        

    },[Category])


  return (
    <div className='Portfolio'>
        <ScrollToTop/>
        <motion.div
            initial={{ opacity: 0 , x:-100}}
            whileInView={{ opacity: 1 , x:0, transition: {
            type: "tween",
            duration: 1
            }}}
            viewport={{ once: true, amount: 0.5 }}>
            <h1 className="portfolio_title">We are proud of <span className='accent'>Our Portfolio</span></h1>
            <p className="text portfolio_subtitle">Fusce mattis finibus urna, eu dictum enim porttitor sed. Donec egestas eget quam eu ullamcorper. Praesent turpis libero, vestibulum ut faucibus nec, finibus sed quam. Fusce rutrum velit augue, eget placerat purus maximus eu.</p>
        </motion.div>
        <div className='work_table_container'>
            <div className='category_menu'>
                <p className={Category=="Conceptual"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("Conceptual")}>Conceptual</p>
                <p className={Category=="2D Production"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("2D Production")}>2D Production</p>
                <p className={Category=="3D Production"?'category_btn category_btn_active':'category_btn'} onClick={()=>setCategory("3D Production")}>3D Production</p>
            </div>
            <SelectField className="mobile_work_category_menu" value={Category} setValue={(value)=>setCategory(value)} options={category_options}/>
            <div className="portfolio_content">
                {SubcategoryArray[SelectedSubcategory]==undefined? <div className='white-screen'/>:
                <div className='portfolio-subcategory-content'>
                    <AnimatePresence>
                    <motion.img src={SubcategoryArray[SelectedSubcategory].image} className='portfolio-subcategory-content-image'
                        key={SubcategoryArray[SelectedSubcategory].image}
                        initial={{ opacity: 0 , y:-100,height:"0",overflow:"hidden"}}
                        animate={{ opacity: 1 , y:0,height:"30rem" , transition: {
                          type: "tween",
                          duration: 0.8,
                          delay:0.3
                        }}}
                        out={{ opacity: 0 , y:-100,height:"0",overflow:"hidden"}}
                        viewport={{ once: true }}
                    />
                    <motion.div className='porfolio-subcategory-overlay'
                        key={SubcategoryArray[SelectedSubcategory].image}
                        initial={{ opacity: 0 , y:-100,height:"0",overflow:"hidden"}}
                        animate={{ opacity: 1 , y:0,height:"30rem" , transition: {
                            type: "tween",
                            duration: 0.8,
                            delay:0.3
                        }}}
                        out={{ opacity: 0 , y:-100,height:"0",overflow:"hidden"}}
                        viewport={{ once: true }}/>
                    <motion.h3
                        key={SubcategoryArray[SelectedSubcategory].title}
                        initial={{ opacity: 0 , y:-100}}
                        whileInView={{ opacity: 1 , y:0, transition: {
                            type: "tween",
                            duration: 0.7,
                            delay:0.5
                        }}}
                        viewport={{ once: true }}>{SubcategoryArray[SelectedSubcategory].title}</motion.h3>
                        <p>We will help you draw sketches of characters, locations and environments. The sketch will help us determine if the concept of our game is moving in the right direction, and after approval, move on to the next stages of art development.</p>
                        </AnimatePresence>
                </div>}
                <div className='portfolio-subcategory-menu'>
                    {SubcategoryArray.map((subcategory,index)=>{
                        return (
                            <motion.div 
                                initial={{ opacity: 0 ,}}
                                whileInView={{ opacity: 1 ,transition: {
                                    type: "tween",
                                    duration: 0.9,
                                    delay:index/6,
                                }}}
                                viewport={{ once: true }}
                            
                            key={index} onClick={()=>{setSelectedSubcategory(-1); setTimeout(()=>{setSelectedSubcategory(index)},200)} }className={index==SelectedSubcategory?'subcategory-option selected-subcategory':'subcategory-option'}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.173 23.0343L18.1247 32.6475C16.9009 33.8183 15.5006 34.0796 13.9238 33.4313C12.347 32.783 11.5573 31.6282 11.5547 29.9669L11.5547 10.9254C11.5547 9.26155 12.3444 8.10551 13.9238 7.45723C15.5032 6.80896 16.9035 7.07147 18.1247 8.24477L28.173 17.8579C28.5595 18.2277 28.8494 18.6282 29.0426 19.0596C29.2358 19.491 29.3325 19.9531 29.3325 20.4461C29.3325 20.9391 29.2358 21.4013 29.0426 21.8326C28.8494 22.264 28.5595 22.6645 28.173 23.0343Z" fill="#222222"/></svg>
                                <p>{subcategory.title}</p>
                            </motion.div>)
                    })}
                </div>    
            </div>
        </div>
    </div>
  )
}

export default OurWork; 
