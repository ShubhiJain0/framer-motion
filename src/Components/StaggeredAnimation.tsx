import React from 'react'
import {motion } from 'framer-motion'
const StaggeredAnimation = () => {
  
  const items: string[] = ["item 1", "item 2",'item 3','item 4','item 5'];
  
const staggeredVairant = {
  
  hidden : {opacity : 0},
  
  visible:{
    opacity : 1
}
}

  return (
    <motion.div className="grid grid-cols-3 gap-4"
    initial='hidden'
    animate = 'visible'
    variants={{
      visible :{
        transition :{
          staggerChildren: 0.5
        }
      }
    }}>
      {items.map((item, index) => (
        <motion.div className=" bg-gray-200 p-4 text-black rounded-md" key={index}
        variants={staggeredVairant}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StaggeredAnimation