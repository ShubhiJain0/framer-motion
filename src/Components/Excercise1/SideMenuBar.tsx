import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
const vairant = {
  hidden : {
    opacity : 0,
    x: '-100%'
  },
  visible:{
    opacity : 1,
    x: 0,
  }
}

const SideMenuBar = () => {
 const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="">
      <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-64 h-screen bg-teal-800"
          variants={vairant}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 1.5 }}
          exit={{opacity:0, x:'-100%'}}
        >
          <ul>
            <li className=" border-b-2 mt-2 p-2">Lorem</li>
            <li className=" border-b-2 mt-2 p-2">Lorem</li>
            <li className=" border-b-2 mt-2 p-2">Lorem</li>
            <li className=" border-b-2 mt-2 p-2">Lorem</li>
          </ul>
        </motion.div>
      )}</AnimatePresence>
      <button
        className=" bg-purple-500 px-4 py-2 rounded-md"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Click to swipe menu
      </button>
    </div>
  );
}

export default SideMenuBar