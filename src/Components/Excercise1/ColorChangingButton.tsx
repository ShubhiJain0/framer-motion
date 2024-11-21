import React from 'react'
import {motion} from 'framer-motion'
const ColorChangingButton = () => {
  return (
    <div>
      <motion.div className=" w-48 h-48"
      animate = {{backgroundColor : ['#FF0000' , '#00FF00', '#0000FF' , "#FF0000"]}}
      transition={{ duration : 3, repeat : Infinity , ease : 'easeInOut'}}
      ></motion.div>
    </div>
  );
}

export default ColorChangingButton