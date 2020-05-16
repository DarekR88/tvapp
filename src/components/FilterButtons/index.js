import React from "react";

function Filter() {

  const handleClick = () => {
    
  }

  return (
    <div className="filterContainer">
      <p>Search for: </p>
      <div className="filterButtons">
        <button class="favorite styled" type="button">
          Shows
        </button>
        <button class="favorite styled" type="button">
          Actors
        </button>
        <button class="favorite styled" type="button">
          Actors and Shows
        </button>
      </div>
    </div>
  );
}

export default Filter;
