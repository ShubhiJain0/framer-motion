import React from 'react'
import {motion} from 'framer-motion'
const boxVariants = {
  initial: {
    rotate: 0,
    skew: 0,
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    skew: "10deg",
    transition: { duration: 0.3 },
  },
  onclick: {
    scale: 0.9,
    skew: "-15deg",
    rotate: -10,
    transition: { duration: 0.3 },
  },
};
const AnimatedShape = () => {
  return <motion.div className='w-24 h-24 bg-blue-500'
  variants={boxVariants}
  initial={'initial'}
  whileHover={'hover'}
  whileTap={'onclick'}
  ></motion.div>;
}

export default AnimatedShape