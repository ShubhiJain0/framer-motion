import React, { useState } from 'react'
import {motion} from 'framer-motion'
const SideBar = () => {
const [sidebar, setSidebar] =  useState(false);
  return (
    <div className="flex">
      <button
        className="mb-4 pd-2 bg-blue-500 text-white rounded-md"
        onClick={() => {
          setSidebar(!sidebar);
        }}
      >
        Toggle sidebar
      </button>

      <motion.div className={`fixed left-0 top-0 h-full bg-gray-500 p-6 text-white' ${sidebar? "" : "-translate-x-full"}`}
      initial={{x : '-100%'}}
      animate={{ x: sidebar? "0%" : "-100%"}}
      transition={{duration : 0.5}}
      >
        <h2 className="text-lg text-white">Lorem, ipsum.</h2>
        <h2 className="text-lg text-white">Lorem, ipsum.</h2>
      </motion.div>
    </div>
  );
}

export default SideBar