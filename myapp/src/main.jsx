// !==first way to create a createroot()
// import ReactDOM from "react-dom/client"
// let r = ReactDOM.createRoot(document.getElementById("root"))
// console.log(r);
// r.render(<h1>hello react js</h1>)

// !=== secondway of createroot()
import {createRoot} from "react-dom/client"
createRoot(document.getElementById("root")).render(<h2>Hello react javascript</h2>)