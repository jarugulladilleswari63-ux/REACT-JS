// import Counter from "./Counter";
// let App = ()=>{
//     return <>
//     <h1>APP Component</h1>
//     <Counter></Counter>
//     </>

// }

// export default App;

import React from 'react'
import  Counter  from './UseState/Counter.jsx'
import Cart from './UseState/Cart.jsx'

const App = () => {
  return (
    <div>
        <Counter/>
        <Cart/>
    </div>
  )
}

export default App