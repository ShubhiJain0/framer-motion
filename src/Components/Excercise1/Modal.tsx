import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Modal = () => {
 const [Modal, setModal]= useState(true);
  return (
    <div>
      {Modal && (
        <motion.div
          className={`flex justify-center flex-col bg-orange-500 p-6 rounded-lg ${
            Modal ? `translate-y-0` : `-translate-y-full`
          }`}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "100%" }}
          exit={{opacity: 0, y: "-100%"}}
        >
          <h1 className="text-lg mb-4">Modal</h1>
          <p className="mb-4">Lorem ipsum dolor sit.</p>
          {}
          <button
            className="pd-2 border border-gray-400 rounded-md"
            onClick={() => {
              setModal(!Modal);
            }}
          >
            close model
          </button>
        </motion.div>
      )}

      <div>
        {!Modal &&
          <button
            className="bg-blue-500 text-white p-4 rounded md m-5"
            onClick={() => {
              setModal(!Modal);
            }}
          >
            {" "}
            toggle modal
          </button>
        }
      </div>
    </div>
  );
}

export default Modal