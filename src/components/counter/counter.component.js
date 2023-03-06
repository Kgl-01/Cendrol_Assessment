import { Fragment } from "react";
import "./counter.styles.scss";

const Counter = ({ value, handleClick, valueChanged, changeColor }) => (
  <Fragment>
    <div className="rectangle">
      <div className="circle">
        <div className="value">{value}</div>
        <button className="increment-button" onClick={handleClick}>
          Click to increase counter
        </button>
      </div>
    </div>
    {valueChanged ? (
      <button
        className="change-color"
        onClick={changeColor}
        style={{ backgroundColor: "red" }}
      >
        Change Color
      </button>
    ) : (
      <button className="change-color" onClick={changeColor}>
        Change Color
      </button>
    )}
  </Fragment>
);

export default Counter;
