import React from "react";
import { motion } from "framer-motion";

const LetterByLetter = () => {
  const text = "Shubhi";

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-3xl font-bold tracking-widest">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ x: "-100vw", opacity: 0 }} // Start far off-screen
            animate={{ x: 0, opacity: 1 }} // End at the center
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default LetterByLetter;
