// !==first way to create a createroot()
// import ReactDOM from "react-dom/client"
// let r = ReactDOM.createRoot(document.getElementById("root"))
// console.log(r);
// r.render(<h1>hello react js</h1>)

// !=== secondway of createroot()
// import {createRoot} from "react-dom/client"
// createRoot(document.getElementById("root")).render(<h2>Hello react</h2>)

// import { createRoot } from "react-dom/client";
// import React from "react";

// element creation in react js 
// 1. react.createElement(element,properties /attritube,children)

// let element = React.createElement("h1",null,"hii react js")
// let ele2 = React.createElement("h2",null,"react is library of js")

// let container = React.createElement("div",null,element,ele2)
// createRoot(document.getElementById("root")).render(container)


// ! --- creating multiple elements inside one createroot 
import {createRoot} from "react-dom/client";
// import { createElement } from "react";
// createRoot(document.getElementById("root")).render(createElement("div",{style:{border:"2px solid black",width:"300px",display:"flex",flexDirection:"column"},alignItems:"center"},
//     createElement("img",{src:"https://media-public.canva.com/MADGyEZRjKc/4/thumbnail_large.jpg"}),
//     createElement("h1",null,"sky is beautiful"),
//     createElement("h2",null,"sky❤️")
// ))

// !== JSX == javaScript XML
// ! ===  it is simple way to create createELement  
// createRoot(document.getElementById("root")).render(
//     <div>
//         <img src="https://media-public.canva.com/MADGyEZRjKc/4/thumbnail_large.jpg" alt="" />
//         <h1>Sky is beautifull</h1>
//         <h2>React developer</h2>
//     </div>
// )

// let ele =
// <div> hello </div> //$$typeof: Symbol(react.transitional.element), type: 'div', key: null, props: {…}, _owner: null, …}
// console.log(ele);



// !==creating jsx elements using all rules of jsx 
// let element = (
//     <section>
//         <form>
//             <label htmlFor="">Name:</label>
//             <input type="Name" />
//         </form>
//         <ul>
//             <li className='list'>list1</li>
//             <li className="list">list2</li>
//             <li className="list">list3</li>
//         </ul>
//     </section>
// )
// createRoot(document.getElementById("root")).render(element)


// ! == fragment -- it is method of react and it is avoid the unnessary element for jsx
// import React from "react";
// let element = (
//     <React.Fragment>
//         <form action="">
//             <label htmlFor="">Name:</label>
//             <input type="name" />
//         </form>
//         <ul>
//             <li className="list">list1</li>
//             <li className="list">list2</li>
//             <li className="list">list3</li>
//         </ul>
//     </React.Fragment>
// )
// createRoot(document.getElementById("root")).render(element)




import React from "react";
import "./index.css"
let element = (
    <>
        <form action="">
            <label htmlFor="">Name:</label>
            <input type="name" />
        </form>
        <ul>
            <li className="list">list1</li>
            <li className="list">list2</li>
            <li className="list">list3</li>
        </ul>
    </>
)
createRoot(document.getElementById("root")).render(element)