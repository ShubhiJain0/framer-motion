import React, { useState } from 'react'
import {motion} from 'framer-motion'
const parentVairent = {
  visible: { opacity: 1,
    transition:{
      staggerChildren : 0.8,
      staggerDirection:1,
    }
   },
  hidden: { opacity: 0 },

};

const childVairent ={
  visible:{opacity : 1 , y:0},
  hidden: {opacity:0, y:50}
}

const AnimatedGallery2 = () => {

const [show, setShow] =useState(true);

const images = [
  {
    src: "https://wallpapercave.com/wp/wp5241147.jpg",
  },
  {
    src: "https://wallpaperaccess.com/full/922693.jpg",
  },
  {
    src: "https://tse2.mm.bing.net/th?id=OIP.67ztIJsTobQzyvvxy0TjzgHaEo&pid=Api&P=0&h=180",
  },
  {
  src:"https://wallsdesk.com/wp-content/uploads/2016/11/Night-Sky-Moon-Wallpapers.jpg"},
];

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col space-y-3">
      <motion.div
        className="w-[81%] h-[30%]  border p-2 border-gray-400 rounded-3xl flex relative overflow-hidden"
        variants={parentVairent}
        initial="hidden"
        animate={show ? "visible" : "hidden"}
      >
        {images.map((image, index) => (
          <motion.img
            src={image.src}
            alt=""
            className="w-[24%] h-[100%] object-cover m-1"
            variants={childVairent}
          />
        ))}
      </motion.div>
      <button
        className="w-24 h-10 bg-blue-700 p-2 rounded-md"
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show ? "show" : "hide"}
      </button>
    </div>
  );
}

export default AnimatedGallery2