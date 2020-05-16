import React from "react";
import { useDispatch } from "react-redux";
import {actions} from '../../Features/FilterCheck/reducer';

function Filter() {

  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(
      actions.filter({
        filterCheck: event.target.value
      })
    )
  }

  return (
    <div className="filterContainer">
      <p>Search for: </p>
      <div className="filterButtons">
        <button className="favorite styled" type="button" value='shows' onClick={handleClick}>
          Shows
        </button>
        <button className="favorite styled" type="button" value='actors' onClick={handleClick}>
          Actors
        </button>
        <button className="favorite styled" type="button" value='AaS' onClick={handleClick}>
          Actors and Shows
        </button>
      </div>
    </div>
  );
}

export default Filter;
