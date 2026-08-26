import React from 'react'
// import { Component } from 'react';

const Child = (props) => {
  return (
    <>
    <h1>I am child component</h1>
    <h1>{props.name} is 🫶🫶</h1>
    <h1>{props.callsheet ? <> Yes she is avail </> : <>she is not avail</> } </h1>    
    <h1>{props.drama.join(", ")}</h1>
    <ol>
      {props.drama.map((ele, id)=>{
       return <li key={id}>{ele}</li>
      })
        
      }
      <hr />
    </ol>
    {/* <h1>{props.me.names}</h1>
    <h1>{props.me.age}</h1> */}
   {
    <>
     <h1>{props.you.names}</h1>
    <h1>{props.you.age}</h1>
    </>
   }
<hr />
   <h1>Counter Application</h1>
   <h1>Count: {props.fun.state}</h1>
   <button onClick={props.fun.upt}>Increment</button>
   <button onClick={props.fun1.desc}>decrement</button>
    </>
  )
}

export default Child;