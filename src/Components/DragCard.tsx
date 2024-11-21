import React from 'react'
import {motion} from "framer-motion"
const DragCard = () => {
  return (
    <motion.div 
    initial={{scale : 1, rotate:0}}
    className="max-w-sm mx-auto bg-white text-black rounded-lg overflow-hidden p-2"
    whileHover={{scale: 1.2, rotate:-5}}
    whileTap={{scale:0.95}}
    drag
    dragConstraints={{
      left:-50,
      right:50,
      top:-50,
      bottom:50,
    }}
    dragElastic={0.2}
    transition={{type: "spring", stiffness:300}}
    >
      <img
        className="w-full h-48 object-cover"
        src="http://www.10wallpaper.com/wallpaper/1920x1200/1310/Desert_camel-Animal_World_Wallpaper_1920x1200.jpg"
        alt=""
      />
      <div>
        <h1 className="text-black font-medium text-xl mb-2 ml-5">Lorem</h1>

        <p className='text-black m-5'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, est?</p>
      </div>
    </motion.div>
  );
}

export default DragCard