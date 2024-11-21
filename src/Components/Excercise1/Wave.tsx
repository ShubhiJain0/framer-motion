import React from 'react'
import {motion} from 'framer-motion'
const Wave = () => {
  
  const boxes = Array.from({length : 5});
  
  return (
    <div className=" flex space-x-1">
      {boxes.map((_,index) => (
        <motion.div key={index} className="w-16 h-16 bg-purple-500"
        animate = {{ y : [0,-30,0]}}
        transition={{duration :0.6, repeat : Infinity , repeatType: 'reverse', delay : index*0.1}}
        ></motion.div>
      ))}
    </div>
  );
}

export default Wave