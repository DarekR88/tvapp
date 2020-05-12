import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.genres}</p>
      <p>{props.dDay}</p>
      <p>{props.url}</p>
      <img src={props.image} alt="show/actor image"></img>
    </div>
  );
}

export default Card;
