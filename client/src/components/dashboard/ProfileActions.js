import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/game" className="btn btn-light">
        <i className="fa fa-desktop text-info mr-1" />
        Create Game
      </Link>
      <Link to="/controller" className="btn btn-light">
      <i className="fa fa-gamepad text-info mr-1" />
        Controller
      </Link>
    </div>
  );
};
export default ProfileActions;
