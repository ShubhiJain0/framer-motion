import React, { useState } from 'react'
import {motion} from 'framer-motion'
const TopOnChangeColour = () => {
  
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500"];

  const handleColor = ()=>{
    setColorIndex((prev) =>(prev + 1) % colors.length);
  }
  
  return <motion.div
  onTap={handleColor} 
  className={`w-32 h-32 ${colors[colorIndex] } rounded-lg flex items-center justify-center`}>

  </motion.div>;
}

export default TopOnChangeColour