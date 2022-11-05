import React from "react"
import "./navbar1.css"
const navbar1 = ()=>{
    return(
        <div id="full">
        <nav>
           <a href="#N">NEWS</a>
           <p>|</p>
           <a href="#n"> REAL ESTATES</a>
           <p>|</p>
           <a href="#n"> HOTELS</a>
           <p>|</p>
           <a href="#n"> CLASSIFIED</a>
           <p>|</p>
           <a href="#n"> TRAVEL</a>
           <p>|</p>
           <a href="#n"> STUDY</a>
           <p>|</p>
           <a href="#n"> JOBS</a>
           <p>|</p>
           <a href="#n"> HEALTH</a>
           <a href="#n" id="covid">Covid-19</a>
        </nav>
        <div id="right">
            <div className="tog">
            <img src="email (1).png"alt="yo"></img>
            <a href="#N">Newsletter Signup</a>
            </div>
            <div className="tog">
            <img src="marker.png"alt="yo"></img>
            <a href="#N">Register/Login</a>
            </div>
        </div>
        </div>
    )
}
export default navbar1;