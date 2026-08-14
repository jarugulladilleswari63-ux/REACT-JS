import { useState } from "react";
let Counter = ()=>{
    let [value,Updater]= useState(0);
    console.log("component");

    return <>
    <h1>Counter Component </h1>
    <h2>count  {value} </h2>
    <button onClick={()=>Updater(value+1)}>Increment</button>
    </>
}

export default Counter;