import React from "react";

function Card(props) {

    return (
      <div className="Card">
          <p>{props.name}</p>
          <p>{props.type}</p>
          <p>{props.genres}</p>
      </div>
    );
  }
  
  export default Card;