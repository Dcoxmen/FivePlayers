import React from "react";
import "../PlayerStyle.css";

function One(props) {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-2">
          <img src={profile.user.avatar} alt="" className="rounded-circle" />
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{profile.user.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default One;
