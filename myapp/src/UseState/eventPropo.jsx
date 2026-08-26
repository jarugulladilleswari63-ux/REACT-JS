import React from 'react'

const Events = () => { 
    let handleBtn = (e)=>{
        console.log(e);
        console.log(e.target.innerHTML);
        
        
    }
  return (
    <>
    <div onClick={handleBtn}>
        <button>Red</button>
        <button>Blue</button>
        <button>Black</button>
    </div>
    </>
  )
}

export default Events