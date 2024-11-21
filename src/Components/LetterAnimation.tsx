import React from 'react'
import {motion} from 'framer-motion'
const LetterAnimation = () => {
  
  const text = "Hello world";

  const childrenVariant = {
    
    hidden : {
      opacity : 0,
    },
    visible :{
      opacity : 1,
    }
  }

  const parentVariant = {
    hidden :{
      opacity : 0
    },
    
    visible : {
      opacity : 1,
      transition : {
        staggerChildren : 0.2
      }
    }
  }
  
  return (
    <motion.div className="text-4xl font-bold text-white"
    initial = 'hidden' 
    animate="visible"
    variants={parentVariant}
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index}
        variants={childrenVariant}
        >{letter}</motion.span>
      ))}
    </motion.div>
  );
}

export default LetterAnimation