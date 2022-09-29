import React, { Profiler } from "react";
import AddABreak from "../AddABreak/AddABreak";
import Calculation from "../Calculation/Calculation";
import Profile from "../Profile/Profile";

const Sidebar = () => {
  const addABreak = (time) => {
    console.log(time);
  };
  return (
    <div className="mt-5">
      <Profile></Profile>
      <AddABreak addABreak={addABreak}></AddABreak>
      <Calculation></Calculation>
    </div>
  );
};

export default Sidebar;
