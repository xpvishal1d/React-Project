# React-Project

 ### mai aaj useState name se ek hook hai use padha jisme aapko ek varaable me apna default and ek function ek array me bank karke rakhna hota hai iska use ham counter wale project me kar sakte hai ....
 #for example ```javascript
 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,setCounter]= useState(15)

  // let counter =15

  const addValue=()=>{
    // counter=counter+1
    if (counter===30) {
      counter=counter-15# React-Project

### Mai aaj `useState` naam se ek hook padha jisme aapko ek variable me apna default aur ek function ek array me band karke rakhna hota hai, iska use ham counter wale project me kar sakte hai.

For example:
```javascript
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter === 30) {
      counter = counter - 15;
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter < 1) {
      counter = counter + 15;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1 className='mt-2'>Vishal Singh kutta Counter</h1>
      <h2 className='mt-2'>Counter Value: {counter}</h2>
      <button className='mt-2' onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue} className='mt-2'>Remove Value</button>
      <footer>Footer {counter}</footer>
    </>
  );
}

export default App;

      
    }else{
      setCounter(counter+1)
    }
    // console.log(counter , Math.floor(Math.random()*10+1));

  }
  const removeValue=()=>{
    // counter=counter+1
   if(counter<1){
   counter= counter+15
   }else{
    setCounter(counter-1)
   }

    // console.log(counter , Math.floor(Math.random()*10+1));

  }

  return (
    <>
    <h1 className=' mt-2'>Vishal Singh kutta Counter</h1>
    <h2 className=' mt-2'>Counter Value :{counter}</h2>
    <button className=' mt-2'
    onClick={addValue}
    >Add Value</button>
    <br />
    <button 
    onClick={removeValue}
    className=' mt-2'>Remove Value</button>
    <footer>Footer {counter}</footer>
    </>
  )
}

export default App
```

# 2 shayad hame virtual dom bhi padh lena chahiye 

```link
https://github.com/acdlite/react-fiber-architecture
```

ise kam se kam ek bar padh lena 

# ending of foundation 

###isame props aur tailwind padh rha hun aapko kose bhi milega ok ||
props = properties




