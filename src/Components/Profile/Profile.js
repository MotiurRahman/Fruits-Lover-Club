import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="d-flex profileDetails justify-content-center align-items-center">
        <img width="50px" height="50px" src="images/10751.jpg" alt="" />
        <div className="profileInfo">
          <p className="profileName">Motiur Rahman</p>
          <p>
            <span className="me-2">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            Dhaka, Banglades
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mt-5">
        <div>
          <div>
            <h6 className="d-inline">65</h6>
            <span>kg</span>
          </div>
          <p>Weight</p>
        </div>
        <div>
          <h6>5.6</h6>
          <p>Height</p>
        </div>
        <div>
          <div>
            <h6 className="d-inline">33</h6>
            <span>yrs</span>
          </div>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
