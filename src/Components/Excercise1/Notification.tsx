import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const Notification = () => {
  
const [showNotif , setShowNotif ] =  useState(false);
  
const handleNotif = ()=>{
  setShowNotif(true);

  setTimeout(()=>setShowNotif(false) , 3000)
}

  return (
    <div>
      <AnimatePresence>
        {showNotif && (
          <motion.div
            className="absolute top-4 right-4 bg-green-500 p-2 rounded-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            Notification : Action successfull!
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="bg-green-400 py-2 px-4 rounded-lg"
        onClick={handleNotif}
      >
        Submit
      </button>
    </div>
  );
}

export default Notification