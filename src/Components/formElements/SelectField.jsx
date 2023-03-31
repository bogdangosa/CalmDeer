import react, { useState } from "react";
import "./SelectField.css";
import { AnimatePresence, motion } from "framer-motion";

const SelectField = ({options,value,setValue,className}) => {
    const [FilterState, setFilterState] = useState(false);

    return (
        <div className={"SelectField "+className}>
            <div onClick={()=>setFilterState(!FilterState)} className="SelectFieldTop">
                <p className="selected-value">{value}</p>
                <img src="./arrow_down.svg" className={FilterState?"arrow arrow_rotate":"arrow"}/>
            </div>
            <AnimatePresence>            
            {FilterState&&
                <motion.div className="select-options-container" 
                initial={{ opacity: 0 , y:-50}}
                animate={{ opacity: 1 , y:0, transition: {
                type: "tween",
                duration: 0.3
                }}}
                exit={{ opacity: 0 , y:-20}}>
                    {options.map((option,index)=>{
                        return <p key={index} className="select-option" onClick={()=>setValue(option)}>{option}</p>
                    })
                    }
                </motion.div>}
            </AnimatePresence>

        </div>
    );
};

export default SelectField;
