import React from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll(); // Get scroll progress as a value between 0 and 1

  return (
    <div className="h-[200vh] w-screen bg-pink-300 relative">
      <div className="fixed top-0 left-0 w-full h-4 bg-gray-300 z-0">
        <motion.div
          className="h-4 bg-red-800 z-1"
          style={{ scaleX: scrollYProgress }} // Bind scaleX to scroll progress
          initial={{ originX: 0 }} // Start scaling from the left
          transition={{ ease: "linear" }} // Smooth progress
        />
      </div>
    </div>
  );
};

export default ProgressBar;
