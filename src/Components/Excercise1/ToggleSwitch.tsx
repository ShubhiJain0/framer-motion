import React, { useState } from 'react'
import {motion} from 'framer-motion'
const ToggleSwitch = () => {
 const [toggle , setToggle]= useState(true);
  return (
    <div>
      <motion.div
        className="w-52 h-24  rounded-l-full rounded-r-full relative "
        initial={{ backgroundColor: "#8B5DFF" }}
        animate={{ backgroundColor: !toggle ? "#CB9DF0" : "#8B5DFF" }}
      >
        <motion.div
          className="absolute bg-gray-200 w-20 h-20 rounded-full left-2 top-2"
          initial={{ x: 0 }}
          animate={{ x: !toggle ? "100%" : 0 }}
          transition={{ duration: 1 }}
          onClick={() => {
            setToggle(!toggle);
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default ToggleSwitch