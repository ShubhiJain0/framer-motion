import React from 'react'
import {motion} from 'framer-motion'
const AnimatedButton = () => {
  return (
    <div>
      <motion.button className='bg-teal-400 px-6 py-2 rounded-md'
      whileHover={{scale: 1.3}}
      whileTap={{scale: 0.7}}
      >Button</motion.button>
    </div>
  )
}

export default AnimatedButton