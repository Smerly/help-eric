import React from 'react';

const Recipe = ({title,Calories,image}) => {

    return(
        <div>
            <h1>{title}</h1>
            <p>{Calories}</p>
            <img src= {image} alt= ""></img>
            
        </div>
    );
}

export default Recipe