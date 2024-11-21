import React from 'react'
import {motion} from 'framer-motion';
const StaggeredList = () => {
  
  const items = ["item 1", "item 2", "item 3", "item 4"];
  
  const staggeredChildrens = {
    hidden : {
      opacity : 0,
      y:-100,
    },
    visible:{
      opacity: 1,
      y:0
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
      initial ='hidden'
      animate ='visible'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.5,
            },
          },
        }}
      >
        {items.map((item) => (
          <motion.div
            className="w-18 h-14 bg-yellow-500 text-black p-2 mb-3"
            variants={staggeredChildrens}
            key={item}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default StaggeredList