import React from 'react'
import {motion } from 'framer-motion'
const DragableBox = () => {
  return <motion.div
  className=' p-4 bg-cyan-600'
  drag 
  dragConstraints={{left : 0, right : 300, top : 0, bottom : 300}}
  >DragableBox</motion.div>
}

export default DragableBox