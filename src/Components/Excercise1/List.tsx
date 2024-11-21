import React, { useState } from 'react'
import {motion} from 'framer-motion'
const List = () => {
 
const [items, setItems]: any =  useState([]);

  const [task, setTask] =useState('');
 const handleInput=(e:any)=>{
  setTask(e.target.value)
  console.log(task);
 }
 const handleSubmit = ()=>{
  setItems([...items, {'task': task}]);
 }
  return (
    <div className='fixed'>
      <input
        type="text"
        className="p-2 rounded-md text-black"
        placeholder="enter task"
        onChange={(e) => handleInput(e)}
      />

      <button className="px-4 py-2 bg-cyan-500 ml-1" onClick={handleSubmit}>
        Submit
      </button>

      {items.map((item: any, index: number) => (
        <motion.div className="px-2 py-2 bg-teal-300 w-[100] m-2 flex justify-between
        "
        initial = {{y:0, opacity: 0}}
        animate = {{y:10, opacity:1}}
        transition={{duration : 0.5}}
        >
          <h1 className="text-white">{item.task}</h1>
          <button className='bg-cyan-500'>Delete</button>
        </motion.div>
      ))}
    </div>
  );
}

export default List