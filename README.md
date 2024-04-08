# React-Project ⭐🌟

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

# isame props aur tailwind padh rha hun aapko kose bhi milega ok ||
props means properties,,

ise App.jsx me apna card dalke me properties ko access kiya ja sakta hai Card.jsx me usake name ko ass a parameter dal ke use use kar sakte hai samjh to aa gya hai .../

## Card.jsx
```javascript
import React from 'react'

function Card({username ,images }) {
    // console.log("props:",props);
    return (
        <div className=" mt-3 relative h-[400px] w-[300px] rounded-md">
          <img
            src={images}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              "loool" &rarr;
            </button>
          </div>
        </div>
      )
}

export default Card
```
## App.jsx

```javascript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)

  

  return (
    <>
    <h1 className=' px-2 rounded-md bg-green-600 mb-3'> Tailwind Test</h1>

    <Card username ="Krishna" images="https://images.pexels.com/photos/20804267/pexels-photo-20804267/free-photo-of-shree-krishna-4k-photo.jpeg" />
   
   
    <Card username ="Vishal" images="https://images.pexels.com/photos/18519627/pexels-photo-18519627/free-photo-of-a-young-girl-is-smiling-and-holding-a-teddy-bear.jpeg?auto=compress&cs=tinysrgb&w=600" />
   

    <Card username="DevRaj" images="https://images.pexels.com/photos/7158406/pexels-photo-7158406.jpeg?auto=compress&cs=tinysrgb&w=600"   />

   
     
    </>
  )
}

export default App
```

# Background Changer 

### isame usestate and and onclick ki bat huyi hai aur mai khush hun ki mujhe onclick k bare me aaj pata chala.
onclick me function excute nahi balki function callback me dalke excute hota hai kyunki onclick me function ya retunt karta hai usase usako koi matlaw nahi.
ham onclick me kuchh is rarah se balue dal sakte hai ..
onclick = {()=>{yaha function with parameter}}
---or---
const func = function (){},
onclick={func}

## bg changer code
```javascript
import React, { useState } from 'react'

function App() {

  const [color , setColor] = useState("olive")

  return (
    <div className=' h-screen w-full duration-200'
    style={{backgroundColor:color}}
    >
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
        <div className=' flex flex-wrap justify-center gap-3 py-2 px-3 shadow-lg bg-white rounded-3xl'>

          <button onClick={()=>{setColor("red")}} style={{backgroundColor:"red"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>Red</button>
          <button onClick={()=>{setColor("blue")}} style={{backgroundColor:"blue"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>Blue</button>
          <button onClick={()=>{setColor("green")}} style={{backgroundColor:"green"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>green</button>
          <button onClick={()=>{setColor("pink")}} style={{backgroundColor:"pink"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>pink</button>
          <button onClick={()=>{setColor("skyblue")}} style={{backgroundColor:"skyblue"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>skyblue</button>
          <button onClick={()=>{setColor("yellow")}} style={{backgroundColor:"yellow"}} className= ' px-4 outline-none py-1 rounded-full text-black shadow-lg'>yellow</button>
          <button onClick={()=>{setColor("black")}} style={{backgroundColor:"black"}} className= ' px-4 outline-none py-1 rounded-full text-white shadow-lg'>black</button>
        </div>
      </div>
    </div>
  )
}

export default App

```















