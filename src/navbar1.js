import React from "react"
import "./navbar1.css"
const navbar1 = ()=>{
    return(
        <div id="full">
        <nav>
           <a href="#">NEWS</a>
           <p>|</p>
           <a href="#"> REAL ESTATES</a>
           <p>|</p>
           <a href="#"> HOTELS</a>
           <p>|</p>
           <a href="#"> CLASSIFIED</a>
           <p>|</p>
           <a href="#"> TRAVEL</a>
           <p>|</p>
           <a href="#"> STUDY</a>
           <p>|</p>
           <a href="#"> JOBS</a>
           <p>|</p>
           <a href="#"> HEALTH</a>
           <a href="#" id="covid">Covid-19</a>
        </nav>
        <div id="right">
            <div className="tog">
            <img src="email (1).png"alt="yo"></img>
            <a href="#">Newsletter Signup</a>
            </div>
            <div className="tog">
            <img src="marker.png"alt="yo"></img>
            <a href="#">Register/Login</a>
            </div>
        </div>
        </div>
    )
}
export default navbar1;