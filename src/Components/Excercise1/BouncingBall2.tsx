import React from 'react'
import {motion} from 'framer-motion'
const BouncingBall2 = () => {
  return (
    <motion.div className="w-16 h-16 p-2 rounded-full bg-yellow-400"
    initial={{y:0}}
    animate = {{y: [0,-100, 0, -200, 0]}}
    transition={{duration : 2, repeat : Infinity , repeatType: 'loop'}}
    ></motion.div>
  );
}

export default BouncingBall2