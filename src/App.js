import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ConsumedFruits from "./Components/ConsumedFruits/ConsumedFruits";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";
import QuestionAnswer from "./Components/QuestionAnswer/QuestionAnswer";

function App() {
  const [conTime, setConsumed_time] = useState([]);

  const consumedTime = (consumedTime) => {
    let newArray = [...conTime, consumedTime];
    setConsumed_time(newArray);
  };

  return (
    <div className="container">
      <Header></Header>
      <div className="row">
        <div className="col-lg-2 col-12 my-5 d-lg-none d-block">
          <Sidebar conTime={conTime}></Sidebar>
        </div>
        <div className="col-lg-10 col-12">
          <ConsumedFruits consumedTime={consumedTime}></ConsumedFruits>
        </div>
        <div className="col-lg-2 col-12 d-none d-lg-block">
          <Sidebar conTime={conTime}></Sidebar>
        </div>
      </div>
      <div className="mt-5">
        <QuestionAnswer></QuestionAnswer>
      </div>
    </div>
  );
}

export default App;
