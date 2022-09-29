import React, { Profiler, useEffect, useState } from "react";
import AddABreak from "../AddABreak/AddABreak";
import Calculation from "../Calculation/Calculation";
import Profile from "../Profile/Profile";

const Sidebar = (porps) => {
  const [time, setTime] = useState(0);
  const addABreak = (time) => {
    setTime(time);
    localStorage.setItem("Time", time);
  };

  useEffect(() => {
    const storeData = localStorage.getItem("Time");
    if (storeData) {
      setTime(storeData);
    }
    // console.log(storeData);
  }, []);

  return (
    <div className="rightBar">
      <Profile></Profile>
      <AddABreak addABreak={addABreak}></AddABreak>
      <Calculation time={time} consumedTime={porps.conTime}></Calculation>
    </div>
  );
};

export default Sidebar;
