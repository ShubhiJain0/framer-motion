import React from 'react'
import {motion} from 'framer-motion'
const ComplexAnimation = () => {
  return (
    <div>
      <div className="h-[200vh]"></div>
      <motion.div
        className="p-2 bg-blue-500 w-64 h-64 rounded-3xl"
        initial={{ opacity: 0, rotateX: 0, scale: 0 }}
        whileInView={{ opacity: 1, rotateX: "720deg", scale: 1 }}
        transition={{ duration: 3 }}
      ></motion.div>

      
    </div>
  );
}

export default ComplexAnimation