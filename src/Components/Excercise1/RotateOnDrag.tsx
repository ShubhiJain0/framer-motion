import React, { useState } from 'react'
import {motion} from 'framer-motion'
const RotateOnDrag = () => {
 
  const [rotat , setRotat] = useState(0);

  const handleDrag = (_: any, info : any) =>{
    const newRotation = rotat * info.offset.x;
    setRotat(newRotation);
  }

  return (
    <motion.div className=" p-2 bg-cyan-600" 
    drag
    onDrag={ handleDrag}
    style={{rotate : rotat}}
    >
      RotateOnDrag
    </motion.div>
  );
}

export default RotateOnDrag