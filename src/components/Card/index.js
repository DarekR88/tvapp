import React from "react";

function Card(props) {
  return (
    <div className="Card">
      <div className="card-image">
        <a href={props.url}>
          <img
            className="showImage"
            src={props.image}
            alt="show/actor image"
          ></img>
        </a>
      </div>
      <div className="card-info">
        <p className="title">{props.name}</p>
        <p className="genres">{props.genres}</p>
        <p className="type">{props.type}</p>
        <p className="dDay">{props.dDay}</p>
        <a className="link" href={props.url}>
          More Info
        </a>
      </div>
    </div>
  );
}

export default Card;
