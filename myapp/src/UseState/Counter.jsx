// import React from 'react'

// export const Counter = () => {
//   return (
//     <div>Counter</div>
//   )
// }



import React, { useState } from 'react'

const Counter = () => {
    let [Count,setCount]=useState(0)
    let [Preview,setPreview] = useState(0)

    let handleInc = () =>{
        // setCount(Count+1)
        setCount((c)=>{
            let newCount = c+1;
            setPreview(Count)
            // console.log(c );

            return newCount
        })
    }
  return (
    <div>
        <h1>Count: {Count} </h1>
        <h3>Preview : {Preview} </h3>
        <button onClick={handleInc}>Increment</button>
    </div>
  )
}

export default Counter