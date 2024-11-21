import React, { useState } from 'react'
import {motion} from 'framer-motion'
const OnPressChangeSize = () => {
 const [isLarge , setIsLarge] = useState(false);

 const longPressStart = ()=>{
  setIsLarge(true)
 }

 const longPressStop = ()=>{
  setIsLarge(false)
 }
  return (
    <motion.div
      className={`w-40 bg-blue-500 rounded-lg flex items-center justify-center p-4 ${isLarge? `w-60 h-28` : ``}`}

      onTap={longPressStop}

      onTapStart={longPressStart}

      onTapCancel={longPressStop}
    >
      OnPressChangeSize
    </motion.div>
  );
}

export default OnPressChangeSize