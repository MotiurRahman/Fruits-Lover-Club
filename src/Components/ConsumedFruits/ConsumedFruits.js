import React, { useEffect, useState } from "react";
import Fruit from "../Fruit/Fruit";

const ConsumedFruits = (props) => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return (
    <div>
      <h4>Select today consumed fruits.</h4>
      <div className="row row-cols-1 row-cols-lg-3">
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.id}
            fruit={fruit}
            consumedTime={props.consumedTime}
          ></Fruit>
        ))}
      </div>
    </div>
  );
};

export default ConsumedFruits;
