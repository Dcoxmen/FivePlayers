import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login and Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //Save to local storage
      const { token } = res.data;
      //Set token to local storage
      localStorage.setItem("jwtToken", token);
      //Set token to Auth Header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//Set logged in User
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
//Log out user
export const logoutUser = () => dispatch => {
  //Remove the token
  localStorage.removeItem("jwtToken");
  //Remove auth header future requests
  setAuthToken(false);
  //Set current Usser to empty object and auth to false
  dispatch(setCurrentUser({}));
};
