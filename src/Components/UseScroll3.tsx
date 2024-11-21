import { useScroll, useTransform } from 'framer-motion';
import React from 'react'
import {motion} from 'framer-motion'
const UseScroll3 = () => {
 const {scrollY} = useScroll();

const borderRadius =  useTransform(scrollY , [0 , 300],[0,100]);

const scale = useTransform(scrollY , [0, 300], [1,2]);
  return (
    <div className='h-[200vh] flex justify-center items-center'>
      {/* <h1>UseScroll3</h1> */}
      <motion.div className='w-24 h-24 p-4 bg-teal-400' style={{scale , borderRadius}}>

      </motion.div>
    </div>
  );
}

export default UseScroll3