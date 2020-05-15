import React from "react";
import TvImage from "../../photos/TVpng.png";
import { useSelector } from "react-redux";

function Logo() {

  const formChange = useSelector(
    (state) => state.formChange.formChange.formChange
  );

  return (
    <div className={formChange?"Logo":"Logo-L"}>
      <div className="image-container">
        <img class="tv-picture" src={TvImage} alt="TV" />
        <p className="title">TV</p>
        <p className="title-two">PILOT</p>
      </div>
    </div>
  );
}

export default Logo;
