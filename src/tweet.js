import React from "react";
import "./App.css"

function Tweet(prop){
    return(
        <div className="tweet">
            <h3>{prop.name} </h3>
            <p>{prop.message}</p>
            <h3>number of like</h3>
        </div>
    )
}
export default Tweet