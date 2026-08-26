import React, { useState } from 'react'

const Task = () => {
    let [click,setClick] = useState(true)
  return (
    <>
    <button onClick={()=>{setClick(!click)}} >Change</button>
    {
        click ?  <> <h1> </h1> </> : <> <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iure.</h1> </>
    }
    </>
  )
}

export default Task