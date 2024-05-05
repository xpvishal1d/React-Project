import React, { useState } from 'react';

function App() {
  let [number, setNumber] = useState(15);

  let addValue = () => {
    if (number === 30) {
      setNumber(number - 15);
    } else {
      setNumber(number + 1);
    }
  };

  let removeValue = () => {
    if (number === 0) {
      setNumber(number + 15);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <div className='h-full w-full bg-gray-800 flex flex-col justify-center items-center'>
        <h1 className='text-center font-extrabold text-3xl text-white mb-6'>Add number and remove number</h1>
        <p className='text-center text-white text-5xl mb-6'>{number}</p>
        <button className='text-lg text-white bg-purple-600 px-4 py-2 rounded-lg mb-4' onClick={addValue}>
          Add ➕
        </button>
        <button className='text-lg text-white bg-red-600 px-4 py-2 rounded-lg' onClick={removeValue}>
          Remove ➖
        </button>
      </div>
    </>
  );
}

export default App;
