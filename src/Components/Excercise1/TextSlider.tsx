import React from 'react'
import {motion} from 'framer-motion'
const TextSlider = () => {
  return (
    <div>
      <div className=''>
        <motion.h1
          className="text-lg font-bold"
          initial={{ x: "-500%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          Slide In Text
        </motion.h1>
      </div>
    </div>
  );
}

export default TextSlider