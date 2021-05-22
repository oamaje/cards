import React from "react";
import "../styles.css";

const Cards = (props) => {
  return (
    <div className="card">
      <label id="title">{props.title}</label>
      <div className="card-body">
        <b>${props.winnings}</b>
        <span id="pr" className={props.class}>
          {props.arrow}
          {props.number}
        </span>
      </div>
    </div>
  );
};

export default Cards;
