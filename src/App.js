import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ConsumedFruits from "./Components/ConsumedFruits/ConsumedFruits";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [conTime, setConsumed_time] = useState(0);

  let totalTime = 0;
  const consumedTime = (consumedTime) => {
    totalTime = totalTime + parseInt(consumedTime);
    console.log(totalTime);
    setConsumed_time(totalTime);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-sm-6 col-12">
          <Header></Header>
          <ConsumedFruits consumedTime={consumedTime}></ConsumedFruits>
        </div>
        <div className="col-lg-2 col-sm-6 col-12">
          <Sidebar conTime={conTime}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
