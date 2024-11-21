import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion';
const images: string[] = [
  "https://wallpapercave.com/wp/j1O8bCz.jpg",
  "https://jooinn.com/images/mountain-scenery-15.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/images2/Beautiful-River-Scenery-Wallpaper.jpg",
  "https://wallpapercave.com/wp/wp4511457.jpg",
  "https://www.goodfreephotos.com/albums/other-landscapes/mountains-and-pond-landscape-with-majestic-scenery.jpg",
];

const GestureSwipeGallery = () => {
 const [currentImg , setCurrentImg]= useState(0);
  const handleDrag = (_: any , info : any)=>{
    if(info.offset.y >100){
      setCurrentImg((currentImg+1)%images.length);
    } else if ( info.offset.y <-100){
    setCurrentImg((currentImg -1 +images.length)%images.length );
      
    }
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-row">
      <div className="w-96 h-80   rounded-xl overflow-hidden">
        <AnimatePresence>
          <motion.img key={currentImg}
            src={images[currentImg]}
            className="w-full h-full object-cover"
            alt=""
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDrag}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2,0.5,0.7,0.8,0.9,1]}}
            exit={{ opacity: [1,0.5,0.2 ]}}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default GestureSwipeGallery