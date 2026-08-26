// import React, { use, useState } from 'react'

// const Eg1 = () => {
//     let [user,setUser] = useState({
//         userName:"zhang",
//         age:15
//     })
//     let handleUser =()=>{
//         setUser({...user 
//             ,age:25})
//             console.log(user.age);
            
//     }
//     let handleData = ()=>{
//       setUser({...user,userName:"surya"})
//       console.log(userName);
      
//     }
//   return (
//     <>
//     <h1>User name : {user.userName}</h1>
//     <h1>Age : {user.age}</h1>
//     <button onClick={handleUser}>Click</button>
//     <button onClick={handleData}> change Name</button>
//     </>
//   )
// }

// export default Eg1


import React, { useState } from 'react'
const Eg1 = () => {
  let [user,setUser] = useState([])
  let handleUSer = ()=>{
  setUser([10,20,30])
  }
  return (
    <>
    <h1>user : {user}</h1>
    <button onClick={handleUSer}>Change</button>
    </>
  )
}
export default Eg1