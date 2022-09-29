import React from "react";

const AddABreak = (props) => {
  const addABreak = props.addABreak;
  return (
    <div className="mt-5">
      <h5>Add A Break</h5>
      <div className="d-flex justify-content-between align-items-center textSize">
        <div onClick={() => addABreak(10)} className="d-flex pointer">
          <span>10</span> <span>s</span>
        </div>
        <div onClick={() => addABreak(20)} className="d-flex pointer">
          <span>20</span> <span>s</span>
        </div>
        <div onClick={() => addABreak(30)} className="d-flex pointer">
          <span>30</span> <span>s</span>
        </div>
        <div onClick={() => addABreak(40)} className="d-flex pointer">
          <span>40</span> <span>s</span>
        </div>
        <div onClick={() => addABreak(50)} className="d-flex pointer">
          <span>50</span> <span>s</span>
        </div>
      </div>
    </div>
  );
};

export default AddABreak;
