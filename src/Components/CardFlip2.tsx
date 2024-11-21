import React from "react";
import { motion } from "framer-motion";

const CardFlip2 = () => {
  return (
    <div className="w-64 h-64" style={{ perspective: 1000 }}>
      <motion.div
        className="relative w-full h-full"
        initial={{ rotateY: 0 }}
        whileInView={{ rotateY: 180 }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded"
          style={{ backfaceVisibility: "hidden" }}
        >
          Front
        </motion.div>

        <motion.div
          className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          Backside
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip2;
