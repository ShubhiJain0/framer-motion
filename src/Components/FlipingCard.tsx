import { motion } from 'framer-motion';
import React, { useState } from 'react'
const FlipingCard = () => {
 const [isFlipped , setIsFlipped] = useState(false);
  return (
    <motion.div
      className="w-64 h-24 bg-sky-700 flex justify-center items-center"
      onClick={() => {
        setIsFlipped(!isFlipped);
      }}
      variants={{
        front: { rotateX: 0 },
        back: { rotateY: 180 },
      }}
      animate={!isFlipped ? "front" : "back"}
      transition={{ duration: 1 }}
    >
      <div className="">front</div>
    </motion.div>
  );
}

export default FlipingCard