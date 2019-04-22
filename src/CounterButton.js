import React from "react";

function CounterButton(props) {
  return (
    <div className="row">
      <button
        id={props.id}
        className="btn btn-primary col-6"
        onClick={props.handleClick}
      >
        {props.text}
      </button>
      <span className="col-6">
        <span className="count" />
        {props.count}
      </span>
    </div>
  );
}

export default CounterButton;
