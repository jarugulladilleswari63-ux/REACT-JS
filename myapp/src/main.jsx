// !==first way to create a createroot()
// import ReactDOM from "react-dom/client"
// let r = ReactDOM.createRoot(document.getElementById("root"))
// console.log(r);
// r.render(<h1>hello react js</h1>)

// !=== secondway of createroot()
// import {createRoot} from "react-dom/client"
// createRoot(document.getElementById("root")).render(<h2>Hello react</h2>)

import { createRoot } from "react-dom/client";
import React from "react";

// element creation in react js 
// 1. react.createElement(element,properties /attritube,children)

let element = React.createElement("h1",null,"hii react js")
let ele2 = React.createElement("h2",null,"react is library of js")

let container = React.createElement("div",null,element,ele2)
createRoot(document.getElementById("root")).render(container)