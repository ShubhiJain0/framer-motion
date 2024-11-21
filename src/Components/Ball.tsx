import React, { useState } from 'react'
import {motion} from 'framer-motion';
const Ball = () => {
 const [isVisible, setIsVisible] =useState(true);
  
 return (
    <div>
      <motion.div className="box" variants={{
        visible:{opacity:'1', scale:'2'},
        hidden:{
          opacity:'0', scale:'1'
        }
      }}
      animate={isVisible? 'visble':'hidden'}
      transition={{duration:1}}
      onClick={()=>{
        setIsVisible(!isVisible);       
      }}
      ></motion.div>
    </div>
  );
}

export default Ball