import React from "react";
import Result from "../Result/Result";
import "./ResultCard.css";

const ResultCard = (props) => {
  return (
    <div className="result-card-wrapper">
      <h3>{props.heading}</h3>
      <button className="search-button" onClick={props.onSearchClick}>
        SEARCH
      </button>
      <div className="timer-ele"> Time Consumed: {props.timer} micro sec</div>
      <Result data={props.data} />
    </div>
  );
};

export default ResultCard;
