import { useMotionValue, motion } from 'framer-motion'
import React, { ChangeEvent } from 'react'


const RangeSlider = () => {

  const scale = useMotionValue(1);

  const handleOnChange=(e:ChangeEvent<HTMLInputElement>)=>{
  scale.set(parseFloat(e.target.value))
}  
return (
    <div>
      <motion.div className="box" style={{scale}}></motion.div>
      <input type="range" min={0} max={10} defaultValue={5} step={1} onChange={handleOnChange}/>
    </div>
  )
}

export default RangeSlider