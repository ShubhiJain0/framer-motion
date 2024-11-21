import React from 'react'
import {motion} from 'framer-motion'
const ComplexAni = () => {
  
  const staggeredVariant = {
    hidden : { 
      opacity : 0,
    },
    visible :{
      opacity : 1,
    
    },
    
  }
  
  return (
    <div>
      <div className='h-[200vh]'>g</div>
    <motion.div
      className="flex justify-center"
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren: 0.5}}
    >
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          className="bg-purple-400 w-24 h-8 m-2"
          variants={staggeredVariant}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
    </div>
  );
}

export default ComplexAni