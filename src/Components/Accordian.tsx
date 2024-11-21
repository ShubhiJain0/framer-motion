import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Accordian = () => {
const [Button , setButton] : any =useState(null);
  const items = [
    {
      title: "Title 1",
      content: "This is content for title 1",
    },
    {
      title: "Title 2",
      content: "This is content for title 2",
    },
    {
      title: "Title 3",
      content: "This is content for title 3",
    },
    {
      title: "Title 4",
      content: "This is content for title 4",
    },
  ];

  const toggleButton = (index: any)=>{
    if(index == Button){
      setButton(null)
    } else{
      setButton(index);
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      {items.map((item, index) => (
        <div>
          <button
            key={index}
            className="p-3 bg-gray-300 border border-white rounded-lg w-full focus:outline-none text-black"
            onClick={()=>toggleButton(index)}
          >
            {item.title}
          </button>

          <motion.div
            className="bg-gray-200 rounded-lg"
            initial={{ height: 0 }}
            animate={{ height: Button==index ? "auto": 0}}
          >
            <h1 className="text-black">{item.content}</h1>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Accordian