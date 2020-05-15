import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="card-image">
        <img className="showImage" src={props.image} alt="show/actor image"></img>
      </div>
      <div className="card-info">
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.genres}</p>
        <p>{props.dDay}</p>
        <a href={props.url}>More Info</a>
      </div>
    </div>
  );
}

export default Card;
