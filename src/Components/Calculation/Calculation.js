import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Calculation.css";

const Calculation = (props) => {
  const { consumedTime, time } = props;
  //console.log(consumedTime);
  let initialValue = 0;
  const totalSecond = consumedTime.reduce(
    (previousValue, currentValue) => previousValue + parseInt(currentValue),
    initialValue
  );

  const notify = () => {
    toast("🦄 Congratulation you have done your activity!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("toast");
  };
  return (
    <div className="mt-5">
      <h5>Consumed Details</h5>
      <div className="row">
        <div className="col-5">
          <p className="textSize">Consumed Time</p>
        </div>
        <div className="col-7">
          <input
            style={{ fontSize: "12px" }}
            type="text"
            value={totalSecond + "second"}
            readOnly
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-5">
          <p className="textSize">Break Time</p>
        </div>
        <div className="col-7">
          <input
            style={{ fontSize: "12px" }}
            type="text"
            value={time + "second"}
            readOnly
          />
        </div>
      </div>
      <div className="mt-3">
        <button
          className="btn btn-primary activityCompletedBtn"
          type="button"
          onClick={notify}
        >
          Activity Completed!
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Calculation;
