import React from 'react'
import {motion} from 'framer-motion'
const parentVarient = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      
    },
  },
  hidden: { opacity: 0 },
};

const chindlrenVarient = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const BallAnimation = () => {
  return (
    <motion.div
      className="flex justify-center items-center space-x-2"
      variants={parentVarient}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="w-10 h-10 bg-teal-400 rounded-full "
          variants={chindlrenVarient}
          
        ></motion.div>
      ))}
    </motion.div>
  );
}

export default BallAnimation