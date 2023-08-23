//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "../styles/index.css";
import { func } from "prop-types";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="six">{props.six % 10}</div>
      <div className="five">{props.five % 10}</div>
      <div className="four">{props.four % 10}</div>
      <div className="three">{props.three % 10}</div>
      <div className="two">{props.two % 10}</div>
      <div className="one">{props.one % 10}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  one: PropTypes.number,
  two: PropTypes.number,
  three: PropTypes.number,
  four: PropTypes.number,
  five: PropTypes.number,
  six: PropTypes.number,
};

let counter = 0;

setInterval(function () {
  const one = Math.floor(counter / 10);
  const two = Math.floor(counter / 100);
  const three = Math.floor(counter / 1000);
  const four = Math.floor(counter / 10000);
  const five = Math.floor(counter / 100000);
  const six = Math.floor(counter / 1000000);
  console.log(one, two, three, four);
  counter++;

  ReactDOM.render(
    <SimpleCounter
      one={one}
      two={two}
      three={three}
      four={four}
      five={five}
      six={six}
    />,
    document.getElementById("app")
  );
}, 100);
