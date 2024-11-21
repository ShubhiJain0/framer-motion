import React from 'react'
import {motion} from 'framer-motion';
const PulsatingButton2 = () => {
  return (
    <div>
      <motion.button className=" py-2 px-4 bg-lime-500 rounded-lg"
      initial={{scale : 1}}

      animate = {{ scale : [1,1.1,1]}}

      transition={{duration : 1, repeat : Infinity, repeatType : 'loop'}}
      >
        PulsatingButton
      </motion.button>
    </div>
  );
}

export default PulsatingButton2