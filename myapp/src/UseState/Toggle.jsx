import React, { useState } from 'react'

const Toggle = () => {
    let [toggle,setToggle] = useState(true)
  return (
    <>
    <button onClick={()=>{setToggle(!toggle)}}>Change</button>
    {
        toggle ? <><h1>dilleswari</h1></> : <> <h1>Surya</h1> </>
    }
    </>
  )
}

export default Toggle