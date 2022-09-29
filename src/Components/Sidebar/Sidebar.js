import React, { Profiler } from "react";
import AddABreak from "../AddABreak/AddABreak";
import Calculation from "../Calculation/Calculation";
import Profile from "../Profile/Profile";

const Sidebar = () => {
  return (
    <div className="mt-5">
      <Profile></Profile>
      <AddABreak></AddABreak>
      <Calculation></Calculation>
    </div>
  );
};

export default Sidebar;
