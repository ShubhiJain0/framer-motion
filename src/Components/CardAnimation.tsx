import React from "react";
import { motion } from "framer-motion";
const CardAnimation = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] w-full flex justify-center items-center">
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg text-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1.2, opacity: 1, y: -100 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl mb-2 text-black">Amazing card</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CardAnimation;
