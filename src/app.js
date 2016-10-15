import React from "react"
import ReactDOM from "react-dom"

const title = "My React Application"
const App = () =>{
    return <div>My React App</div>
}
const element = document.getElementById("app");
ReactDOM.render(<App />, element);