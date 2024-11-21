import React from 'react'
import {motion} from 'framer-motion';
const ZigZag = () => {
  return (
    <motion.div
      className=" w-48 h-48 bg-teal-300"
      animate={{ x: [0, -50, 0, 50, 0], y: [0, -50, 0, 50, 0] }}
      transition={ { duration : 3, repeat : Infinity}}
    ></motion.div>
  );
}

export default ZigZag