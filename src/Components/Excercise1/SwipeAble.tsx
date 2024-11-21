import React, { useState } from 'react'

import {motion} from 'framer-motion';

const SwipeAble = () => {
 const [isRemoved , setRemoved] = useState(false);

 const handleSwipe = (_: any , info : any)=>{

  if(info.offset.x > 100){
    setRemoved(true);
  } else if(info.offset.x < -100){
    setRemoved(true);
  }
 }

  return (
    <motion.div
      className={`w-64 h-32 bg-blue-400 rounded-lg shadow-lg flex items-center justify-center text-white ${
        isRemoved ? "hidden" : ""
      }`}
      onDragEnd={handleSwipe}
      drag = 'x'
      dragConstraints ={{left :-100 , right : 100 }} 
    >
      SwipeAble
    </motion.div>
  );
}

export default SwipeAble