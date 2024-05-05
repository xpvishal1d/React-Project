import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");

  const btnColor = () => {
    if (color === "red") {
      return "red";
    } else {
      return "blue";
    }
  }

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <div className='fixed bottom-2 left-0 w-full bg-white h-auto p-4 rounded-xl'>
        <div className='flex flex-wrap justify-center'>
          {/* Buttons wrapped inside this div */}
          <button onClick={() => setColor("red")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>red </button>
          <button onClick={() => setColor("pink")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>pink 2</button>
          <button onClick={() => setColor("black")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>black 3</button>
          <button onClick={() => setColor("green")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>green 4</button>
          <button onClick={() => setColor("#2CA02C")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>parrot green 5</button>
          <button onClick={() => setColor("blue")} className={`m-2 px-4 py-2 bg-${btnColor()} rounded-md text-white`}>blue 6</button>
        </div>
      </div>
    </div>
  );
}

export default App;
