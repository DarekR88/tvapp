import React from "react";

function Radio() {
  return (
    <div className="radioContainer">
      <p>Search for: </p>
      <div className='radios'>
      <input type="radio" id="SaA" name="drone" value="SaA" checked="checked" />
      <label for="SaA">Shows and Actors</label>

      <input type="radio" id="actors" name="drone" value="actors" />
      <label for="actors">Actors</label>

      <input type="radio" id="shows" name="drone" value="shows" />
      <label for="shows">Shows</label>        
      </div>

    </div>
  );
}

export default Radio;
