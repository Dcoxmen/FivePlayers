import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";


class Game extends Component {
  
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let gameContent;

    if (profile === null || loading) {
      gameContent = <Spinner />;
    } else {

      if (Object.keys(profile).length > 0) {
        gameContent = (
          <div>
            <p className="lead text-muted">
              Player <Link to={`/profile/${profile.handle}`}>{user.name}</Link> is ready...
            </p>
            <a className="btn btn-success" href="/game.html">
              Start Game
            </a>
          </div>
        );
      } 
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              {gameContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Game);