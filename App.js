
import React from "react"
import ReactDOM from "react-dom/client"

const ele=<span>React span</span>

const Heading =()=> {
    return(
       <h1>
   
    Hello Chnadra 🚀
    </h1>) }
     /// it will create object


const HeadingCompoent=()=>{
    return(
        <div id="container">
            {Heading()}
            <Heading/>
            <Heading></Heading>
            {/* <h2>{console.log("hiiiiiiii")}</h2> */}
            <h1 id="heading">This is functional js Namaste</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<HeadingCompoent/>);