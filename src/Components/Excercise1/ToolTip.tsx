import React, { useState } from 'react'
import {motion} from 'framer-motion'
const toolVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -10 },
  
};

const ToolTip = () => {
 const [isVisible , setVisible]= useState(false);

 const handleVisible = ()=>{
  setVisible(!isVisible);
 }
  return (
    <div>
      <button
        className="p-4 bg-cyan-600 inline-block"
        onMouseEnter={() => {
          handleVisible();
        }}
        onMouseLeave={() => {
          handleVisible();
        }}
      >
        ToolTip
      </button>

      {isVisible && (
        <motion.div className="bg-blue-200 text-black"
        variants={ toolVariant}
        initial={'hidden'}
        animate = {'visible'}
        transition={{duration : 0.5}}
        exit={'exit'}
        >
          Tooltip content
        </motion.div>
      )}
    </div>
  );
}

export default ToolTip