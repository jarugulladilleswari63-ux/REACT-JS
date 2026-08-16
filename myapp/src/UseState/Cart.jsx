import React, { useState } from 'react'

const Cart = () => {
    let [Cart,setCart]=useState([])
    let addToCart =(product)=>{
        setCart((prevalue)=>{
            return [...prevalue,product]
        })

    }
    let itemCount = Cart.reduce((count,item)=>{
        count[item]=(count[item] || 0)+1
        return count
    },{})
  return (
    <div>
        <button onClick={()=>{addToCart("Laptop")}}>Add Laptop</button>
        <button onClick={()=>{addToCart("Mobile")}} >Add Mobile</button>
        <button onClick={()=>{addToCart("ipad")}}>Add ipad</button>
        <br></br> <br /><br /><br /><br /><br />
        <h1>Cart Items</h1>
        {/* {
            Cart.map((items)=>{
                return <h3>{items}
                </h3>
            })
        } */}
        {
                Object.keys(itemCount).map((item) => {
                    return (
                        <h3 key={item}>
                            {item} : {itemCount[item]}
                        </h3>
                    )
                })
            }
    </div>
  )
}

export default Cart