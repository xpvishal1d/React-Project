import React from 'react'
import { useState } from 'react'
function Expe() {

        const apps = {
            nam :"vkraja",
            jila : "kkr",
            more : "nothing" ,
            i :123
        }

        const [updater, setUpdater] = useState(0)

        const kuchhbhi =()=>{
            setUpdater(updater+1)
        }

  return (
    <div>
        <h1>
            {apps.nam}

        </h1>
        <button onClick={()=>setUpdater(updater+1)}>
            {apps.i}
        </button>
        <br />
        <button onClick={kuchhbhi} >
            {updater}
        </button>
       
    </div>
  )
}

export default Expe