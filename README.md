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

<<<<<<< HEAD
## fir aaj Password Generator kiya spelling errors k wajah se pura nahi ho paya

### kuchh naya me ajj

 - useEffect
 - useCallback 
 
    ye do hooks k bare jana jisame ek callback aur defendencies aati hai like kya update hoga to kaunsa function / action run hoga. 


# पासवर्ड जेनरेटर एप्लिकेशन

यहाँ आपको React कंपोनेंट दिया गया है जो एक पासवर्ड जेनरेटर एप्लिकेशन है। यहाँ इसका विवरण दिया गया है:

1. **राज्य प्रबंधन**:
   - आप स्थिति का प्रबंधन करने के लिए `useState` हुक का उपयोग कर रहे हैं:
     - `length`: पासवर्ड की लंबाई।
     - `numberAllowed`: क्या नंबर पासवर्ड में अनुमति है, यह बताता है।
     - `charAllowed`: क्या विशेष अक्षर पासवर्ड में अनुमति है, यह बताता है।
     - `password`: उत्पन्न पासवर्ड।
   - `useRef` हुक का उपयोग पासवर्ड इनपुट फील्ड के लिए संदर्भ बनाने के लिए किया जाता है।

2. **पासवर्ड उत्पन्न**:
   - `passwordGenerator` फ़ंक्शन द्वारा पासवर्ड उत्पन्न किया जाता है जो दी गई लंबाई और यदि अनुमति है, तो नंबर और विशेष अक्षरों के आधार पर। यह उत्पन्न पासवर्ड के साथ `password` स्थिति को अपडेट करता है।

3. **क्लिपबोर्ड पर कॉपी**:
   - `copyPasswordToClipboard` फ़ंक्शन कॉपी बटन क्लिक करने पर उत्पन्न पासवर्ड को क्लिपबोर्ड पर कॉपी करता है। यह क्लिपबोर्ड इंटरेक्शन के लिए `navigator.clipboard.writeText` का उपयोग करता है।

4. **प्रभाव हुक**:
   - `useEffect` हुक `length`, `numberAllowed`, `charAllowed`, या `passwordGenerator` फ़ंक्शन में कोई परिवर्तन होने पर पासवर्ड उत्पन्न करने के लिए ट्रिगर किया जाता है।

5. **यूआई**:
   - यूआई में एक हेडर होता है जो यह दिखाता है कि यह पासवर्ड जेनरेटर है।
   - एक पाठ इनपुट फ़ील्ड उत्पन्न पासवर्ड दिखाता है।
   - एक कॉपी बटन उपयोगकर्ताओं को उत्पन्न पासवर्ड को क्लिपबोर्ड पर कॉपी करने की अनुमति देता है।
   - तीन नियंत्रण प्रदान किए गए हैं:
     - पासवर्ड की लंबाई को समायोजित करने के लिए एक रेंज इनपुट।
     - पासवर्ड में नंबर्स और विशेष अक्षरों की अनुमति देने के लिए चेकबॉक्स।

6. **स्टाइलिंग**:
   - यूआई को सजाने के लिए Tailwind CSS क्लासेस का उपयोग किया गया है।

सम्पूर्णतः, कंपोनेंट एक सरल और स्पष्ट इंटरफ़ेस प्रदान करता है जिसका उपयोग करके पासवर्ड को जेनरेट किया जा सकता है और लंबाई और वर



=======
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














