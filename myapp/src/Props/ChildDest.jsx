import React from 'react'

const ChildDest = (props) => {
    let {user,age} = props
  return (
    <>
    <h1>name: {user} </h1>
    <h2>age:{age}</h2>
    <hr />
    </>
  )
}

export default ChildDest