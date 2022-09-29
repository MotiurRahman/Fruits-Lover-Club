import React from "react";
import "./Fruit.css";

const Fruit = (props) => {
  const { id, img, age, name, desc, time } = props.fruit;

  return (
    <div className="col text-left p-5 fruit">
      <img className="img-fluid" src={img} alt="" />
      <h4>{name}</h4>
      <p>{desc.slice(0, 150)}</p>
      <p>For Age:{age}</p>
      <p>Time Required:{time} s</p>

      <button
        onClick={() => props.consumedTime(time)}
        className="btn btn-primary addToListbtn"
        type="button"
      >
        Add to List
      </button>
    </div>
  );
};

export default Fruit;
