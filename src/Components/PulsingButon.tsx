import React from "react";
import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <motion.button
      className="py-5 px-5 rounded-lg" // no bg color class here
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#FF0000", "#0000FF", "#FF0000"], // using hex colors
      }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
    >
      PulsingButton
    </motion.button>
  );
};

export default PulsingButton;
