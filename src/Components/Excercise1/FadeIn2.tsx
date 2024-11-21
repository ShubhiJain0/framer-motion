import React, { useState } from 'react'
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
const FadeIn2 = () => {
 const [visible, setVisible] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-400 text-white rounded-md"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        click me
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="p-4 bg-gray-200 rounded "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-black">Lorem, ipsum.</h1>
            <p className="text-black">Lorem ipsum dolor sit amet.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FadeIn2