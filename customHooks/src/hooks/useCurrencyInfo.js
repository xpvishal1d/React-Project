import { useEffect , useState } from "react";


 function useCurrencyInfo (currency){
    const [data , setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/5b02675f756e6d8851e7c572/latest/%7Bcurrency%7D`)
        .then((res)=>res.json())
        .then((res)=>setData (res[currency]))
       
    },[currency])
        
    console.log(data);
    return data
}

export default useCurrencyInfo