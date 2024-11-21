import { useScroll, useTransform } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
const UseScroll2 = () => {
 const {scrollY} = useScroll();
const scale = useTransform(scrollY , [0,300] , [1,2]);

const opacity = useTransform(scrollY, [0,300], [1,0]);
  return (
    <div className='h-[200vh] flex justify-center items-center'>
      <motion.div className="p-4 w-24 h-24 bg-cyan-600 rounded-lg"
      style={{opacity , scale}}
      ></motion.div>
    </div>
  );
}

export default UseScroll2