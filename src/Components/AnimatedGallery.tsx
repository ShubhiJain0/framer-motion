import React from 'react'
import { motion } from 'framer-motion';

const images = [
  {
    src: "http://upload.wikimedia.org/wikipedia/commons/4/4f/Summit-lake-wv-night-sky-reflection_-_West_Virginia_-_ForestWander.jpg",
    caption: "caption 2",
  },

  {
    src: "http://upload.wikimedia.org/wikipedia/commons/4/4f/Summit-lake-wv-night-sky-reflection_-_West_Virginia_-_ForestWander.jpg",
    caption: "caption 3",
  },
  {
    src: "http://upload.wikimedia.org/wikipedia/commons/4/4f/Summit-lake-wv-night-sky-reflection_-_West_Virginia_-_ForestWander.jpg",
    caption: "caption 3",
  },
];

const AnimatedGallery = () => {
  return (
    <div className="w-[80%] flex">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative m-[1rem] rounded-lg shadow-lg overflow-hidden "
          whileHover={{ scale: 1.2 }}
        >
          <img src={image.src} alt="" className="w-full h-auto" />

          <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 curson-pointer" 
          whileHover={{opacity:1}}
          >
            {image.caption}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default AnimatedGallery