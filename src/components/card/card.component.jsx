import React from "react";
import "./card.styles.css";

export const Card = (props) => {
    return <div className="card-container">
        <img alt="monster" src ={`https://robohash.org/8VR.png?set=set2&size=150x150`}/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
           </div>
}