import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion';

const One = () => {
//  const {scrollY} = useScroll();

const parentVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
      duration: 10,
      staggerDirection: 1,
    },
  },
};

const childrenVarient = { 
  initial : {
    opacity : 0, x:0
  },
  visible: {
    opacity : 1, x:10
  }
}

//   const rotate =useTransform(scrollY, [0 , 500] , [0, 360]);
//  const scale = useTransform(scrollY ,[0,500], [1,1.2] );

//  const x = useTransform(scrollY , [0,500], [0,100])
 
//  const y = useTransform(scrollY, [0, 500], [0, 100]);
  return (
    // <motion.div className='w-24 h-24 bg-teal-700' initial={{x:0}}
    // animate={{x:[0,400,0]}}
    // transition={{duration:2}}
    // >

    // </motion.div>
    // <motion.div className='w-24 h-24 bg-green-500 rounded-full'
    // initial={{y:200}}
    // animate={{y:[200,0,200,0,200]}}
    // transition={{duration:2, repeat: Infinity}}
    // ></motion.div>
    // <motion.div className="bg-red-300 p-3 rounded-full w-12 "
    // initial={{rotate:0}}
    // animate={{rotate:360}}
    // transition={{duration:0.5, repeat:Infinity}}
    // >

    //   <h1 className="text-xl ml-1">S</h1>
    // </motion.div>
    // <motion.div className="h-48 w-24 bg-cyan-200" whileTap={{skewX: '40deg'}}></motion.div>
    // <div className="h-[200vh] flex justify-center items-center">
    //   <motion.div
    //     className="w-24 h-24 bg-pink-500"
    //     style={{ scale, rotate, x, y }}
    //   ></motion.div>
    // </div>

    <motion.div
      className="flex justify-center items-center space-x-1"
      variants={parentVariant}
    initial='initial'
    animate='visible'
    >
      {[...Array(5)].map((_, index) => (
        <motion.div key={index} className="w-24 h-24 bg-pink-600" variants={childrenVarient}
        
        ></motion.div>
      ))}
    </motion.div>
  );
}

export default One