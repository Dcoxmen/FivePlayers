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
      <a class="btn btn-light" href="/game.html">
        Game Link
      </a>
      <Link to="/game" className="btn btn-light">
        <i className="fa fa-gamepad text-info mr-1" />
        Play Game
      </Link>
    </div>
  );
};
export default ProfileActions;
