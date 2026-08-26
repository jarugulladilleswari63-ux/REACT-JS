import React, { useState } from 'react'

const State = () => {
    let [name,setName] = useState("dilleswari") //usestsn(syntax)
    let changeName = (e)=>{
      console.log(e);
        setName("surya")
    }
  return (
    <div>
       <h1>Name : {name}</h1> 
       <button onDoubleClick={changeName}>Change</button>
    </div>
  )
}

export default State