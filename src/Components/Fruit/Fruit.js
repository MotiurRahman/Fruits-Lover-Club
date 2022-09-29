import React from "react";
import "./Fruit.css";

const Fruit = (props) => {
  console.log(props);
  const { id, img, age, name, desc, time } = props.fruit;
  return (
    <div id="fruit" className="col text-left p-5">
      <img className="img-fluid" src={img} alt="" />
      <h4>{name}</h4>
      <p>{desc.slice(0, 150)}</p>
      <p>For Age:{age}</p>
      <p>Time Required:{time} s</p>
      <div class="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Add to List
        </button>
      </div>
    </div>
  );
};

export default Fruit;
