import React from 'react'
import { motion ,useMotionValue } from 'framer-motion'

const UseMotion = () => {

  const x = useMotionValue(100);

  return <motion.div className="box" style={{ x }}></motion.div>;
}

export default UseMotion