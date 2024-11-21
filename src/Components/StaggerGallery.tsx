import React from 'react'
import {motion} from 'framer-motion'
const StaggerGallery = () => {
  const images: string[] = [
    "https://wallpapercave.com/wp/j1O8bCz.jpg",
    "https://jooinn.com/images/mountain-scenery-15.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images2/Beautiful-River-Scenery-Wallpaper.jpg",
    "https://wallpapercave.com/wp/wp4511457.jpg",
    "https://www.goodfreephotos.com/albums/other-landscapes/mountains-and-pond-landscape-with-majestic-scenery.jpg",
  ];

  const staggeredVariant = {
    hidden : {
      opacity : 0,
    },
    visible : {
      opacity : 1
    }
  }

  return (
    <motion.div
      className="flex w-[100vw] p-6 overflow-hidden justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 1,
          },
        },
      }}
    >
      {images.map((item, index) => (
        <motion.img
          src={item}
          alt=""
          key={index}
          className="w-[20rem] h-auto ml-2 rounded-lg shadow-lg"
          variants={staggeredVariant}
        />
      ))}
    </motion.div>
  );
}

export default StaggerGallery