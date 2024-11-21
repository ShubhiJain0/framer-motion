import React from 'react'
import { motion } from 'framer-motion'
const FadeInFadeOut = () => {
  return <motion.div className='w-48 h-48 bg-blue-600 rounded-lg shadow-lg' 
  initial={{opacity :1}}
  animate={{opacity:[1,0,1]}}
  transition={{duration:3, ease:'easeInOut', repeat:Infinity}}
  >
    
  </motion.div>;
}

export default FadeInFadeOut