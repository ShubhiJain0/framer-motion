import React from 'react'
import {motion} from 'framer-motion'
const Variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Fading3 = () => {
  return (
    <motion.div className="p-4 bg-purple-500 rounded-lg"
    variants={ Variant}
    initial = 'hidden'
    animate ='visible'
    transition={{duration : 6}}
    >
      Lorem, ipsum.
    </motion.div>
  );
}

export default Fading3