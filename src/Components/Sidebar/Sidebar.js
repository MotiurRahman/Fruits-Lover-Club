import React, { Profiler, useState } from "react";
import AddABreak from "../AddABreak/AddABreak";
import Calculation from "../Calculation/Calculation";
import Profile from "../Profile/Profile";

const Sidebar = (porps) => {
  const [time, setTime] = useState(0);
  const addABreak = (time) => {
    setTime(time);
  };

  return (
    <div className="mt-5">
      <Profile></Profile>
      <AddABreak addABreak={addABreak}></AddABreak>
      <Calculation time={time} consumedTime={porps.conTime}></Calculation>
    </div>
  );
};

export default Sidebar;
