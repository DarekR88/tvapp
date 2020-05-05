import React from "react";
import TvImage from "../../photos/TVpng.png";

function Logo() {
  return (
    <div className="Logo">
      <div className="image-container">
        <img class="tv-picture" src={TvImage} alt="TV" />
        <p className="title">TV</p>
        <p className="title-two">PILOT</p>
      </div>
    </div>
  );
}

export default Logo;
