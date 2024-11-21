import React, { useState } from 'react'
import {motion} from 'framer-motion'
const GesturePart = () => {
 const [count , setCount] =useState(1);
  return (
    <div>
      {/* <motion.div
        className="box"
        whileHover={{ scale: 1.2,  }}
      ></motion.div> */}

      <motion.div className="box" 
      whileTap={{scale: 2}}
      ></motion.div>
    </div>
  );
}

export default GesturePart