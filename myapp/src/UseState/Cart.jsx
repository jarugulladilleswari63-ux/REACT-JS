import React, { useState } from 'react'

const Cart = () => {
    let [Cart,setCart]=useState([])
    let addToCart =(product)=>{
        setCart((prevalue)=>{
            return [...prevalue,product]
        })
    }
  return (
    <div>
        <button onClick={()=>{addToCart("Laptop")}}>Add Laptop</button>
        <button onClick={()=>{addToCart("Mobile")}} >Add Mobile</button>
        <button onClick={()=>{addToCart("ipad")}}>Add ipad</button>
    </div>
  )
}

export default Cart