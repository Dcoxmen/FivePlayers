import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="merntitle">MERN Fury</h1>
                <div className="wrapper">
                  <p className="lead">
                    {" "}
                    Create a MERN Fury profile, play games and connect with
                    other players.
                  </p>
                  <hr />
                  <Link
                    to="/register"
                    className="btn1 btn btn-lg btn-info mr-2"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn2 btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
