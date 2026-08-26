// ! list rendering 
import React, { useState } from 'react'

const List = () => {
    const [first,setFirst] = useState(["me","you"])
    const [user,setUser] = useState([
        {
            userName : "me",
            age : 15,
            email : "abc@c.c"
        },
        {
            userName : "you",
            age : 18,
            email : "qwe@c.c"
        },
        {
            userName : "we",
            age :20,
            email : "yts@c.c"
        }
    ])
  return (
    <>
    {/* {
        first.map(items=>(
            <h1>{items}</h1>
        ))
    } */}
    {
        user.map(a=>(
            <>
            <h1>Names:{a.userName}</h1>
            <h1>Age:{a.age}</h1>
            <hr />
            </>
            // console.log(a.userName);
            
        ))
    }
    </>
  )
}

export default List