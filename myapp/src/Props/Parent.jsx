import { useState } from "react"
import Child from "./Child"

const Parent = () => {
  let [state,setState] = useState(0)
  let upt = ()=>{
    setState((pre)=>pre+1)
  
  }
  let dec = ()=>{
    setState((decs)=>desc-1)
  }

  let obj = {
    names:"dilleswari",
    age:20,
    skills:"html"
  }
  return (
    <>
    <h1>I am parent component</h1>
    <hr />
    <Child name = "surya" 
     age = {20} 
      callsheet = {false} 
      // ! array
      drama = {["lovely runner","our secret","revenge love"]}
      // ? object
      // me = {{names:"dilleswari",age:20,skills:"html"}}
      you = {obj}
    
      // ! FUnction 
      fun = {{state, upt}}
      fun1 = {{state,dec}}
      />

    </>
  )
}

export default Parent