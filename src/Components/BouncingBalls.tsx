import React from 'react'
import {motion} from 'framer-motion'
const BouncingBalls = () => {
  return (
    <div className='flex justify-center items-center space-x-2'>
      {[...Array(3)].map((_, index) => (
        <div>
          <motion.div className='w-4 h-4 bg-sky-400 rounded-full'
          animate={{y: [0,-15,0]}}

          transition={{duration:0.7, repeat:Infinity, repeatDelay:index*0.2}}
          />
          
        </div>
      ))}
    </div>
  );

}
export default BouncingBalls