import React from "react";

const Result = (props) => {
  return (
    <div className="result-wrapper">
      {props.data.map((item) => {
        return (
          <div className="row-wrapper">
            <label>{item.label}: </label>
            <span>{item.value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
