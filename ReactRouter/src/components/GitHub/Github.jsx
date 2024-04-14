import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//     const [data , setData]=useState([])
//    useEffect(() => {
//    fetch(`https://api.github.com/users/xpvishal1d`)
//    .then(response=>response.json())
//    .then(data =>{
//     console.log(data);
//     setData(data)
//    })
//    }, [])
const data = useLoaderData()
   
  return (
    <div className=' text-center text-white text-3xl p-4 bg-gray-600 '>Github Followers : {data.followers}
    <img className=' rounded-md' src={data.avatar_url} alt="picture" width={200} />
     </div>
  )
}

export default Github

export const githubInfoLoader=async () => {
   const responce = await fetch ('https://api.github.com/users/xpvishal1d')

   return responce.json()
}