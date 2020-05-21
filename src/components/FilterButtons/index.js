import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../Features/FilterCheck/reducer";

function Filter() {
  const [showsButton, setShows] = useState(false);
  const [actorsButton, setActors] = useState(false);
  const [AaSButton, setAas] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    switch (event.target.value) {
      case "shows":
        setShows(true);
        setActors(false);
        setAas(false);
        break;
      case "actors":
        setActors(true);
        setShows(false);
        setAas(false);
        break;
      case "AaS":
        setAas(true);
        setActors(false);
        setShows(false);
        break;
      default:
        setAas(false);
        setActors(false);
        setShows(false);
    }
    dispatch(
      actions.filter({
        filterCheck: event.target.value,
      })
    );
  };

  return (
    <div className="filterContainer">
      <p className='directions'>Filter By: </p>
      <div className="filterButtons">
        <button
          className= {showsButton? 'selectButton clicked': 'selectButton plain'}
          type="button"
          value="shows"
          onClick={handleClick}
        >
          Shows
        </button>
        <button
          className={actorsButton? 'selectButton clicked': 'selectButton plain'}
          type="button"
          value="actors"
          onClick={handleClick}
        >
          Actors
        </button>
        <button
          className={AaSButton? 'selectButton clicked': 'selectButton plain'}
          type="button"
          value="AaS"
          onClick={handleClick}
        >
          Actors and Shows
        </button>
      </div>
    </div>
  );
}

export default Filter;
