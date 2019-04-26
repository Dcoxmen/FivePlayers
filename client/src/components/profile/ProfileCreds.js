import React, { Component } from "react";
import Moment from "react-moment";
class ProfileCreds extends Component {
  render() {
    const { experience } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Character:</strong> {exp.title}
        </p>
        {/* <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location: </strong> {exp.location}
            </span>
          )}
        </p> */}
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description: </strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">
            My Favorite Games and Characters
          </h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Favorites Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Rules of the Game</h3>
          <ul className="list-group">
            <li>Treat other players with respect</li>
            <li>No profanity please.</li>
            <li>Profile is required to access MERN Fury</li>
            <li>Have some fun!</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ProfileCreds;
