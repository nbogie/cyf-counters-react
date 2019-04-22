import React from "react";

function CounterButton(props) {
  return (
    <div className="counter-button col-sm row">
      <button
        id={props.id}
        className="btn btn-primary col-sm"
        onClick={props.handleClick}
      >
        {props.text}
      </button>
      <span className="col-sm">{props.count}</span>
    </div>
  );
}

export default CounterButton;
