import React from 'react'
import {motion} from 'framer-motion'
const StaggeredList2 = () => {
  
  const items = ["item 1", "item 2", "item 3", "item 4"];

  const Variant = {
    hidden :{
      opacity : 0,
    },
    visible:{
      opacity : 1
    }
  }
  
  return (
    <div>
      <div className="flex justify-center items-center h-[200vh]"> </div>
      <motion.ul
        className=""
        variants={Variant}
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        {items.map((item, index) => (
          <motion.li
            className="bg-blue-500 p-4"
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default StaggeredList2