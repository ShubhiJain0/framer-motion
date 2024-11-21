import React from 'react'
import { useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
const UseScrollAnimation = () => {
  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY , 'change', (latest)=>{
    console.log(latest);
    
  })
  return (
    <div className='h-[200vh]'>
      h
    </div>
  )
}

export default UseScrollAnimation