import React from "react";

const Calculation = (props) => {
  const { consumedTime } = props;
  //console.log(consumedTime);
  let initialValue = 0;
  const totalSecond = consumedTime.reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    initialValue
  );
  return (
    <div className="mt-5">
      <h5>Consumed Details</h5>
      <div className="row">
        <div className="col-5">
          <p className="textSize">Conssumed Time</p>
        </div>
        <div className="col-7">
          <input type="text" value={totalSecond} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-5">
          <p className="textSize">Break Time</p>
        </div>
        <div className="col-7">
          <input type="text" value={props.time} />
        </div>
      </div>
      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-primary" type="button">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Calculation;
