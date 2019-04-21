# MERN CRUD w JWT Auth and Redux - Game Maker

# Game Maker Profile Project

> Profile sign up and login network app built with the MERN stack, JWT authentication, and Redux. This app allows user to create a profile
> to display info, game links, and, skill set about themselves to follow members. Authentication is managed by Passport and JWT Token creation while
> Redux manages this across states. Concurrently was installed to create an easier way to start up both the node.js and react client servers together
> for faster development. Backend set-up (aka Node server) included Database model design using MongoDB and Mongoose then user api routes and authentication were built and tested with Postman. Frontend with bootstrap and react client was initiated. React Router and Redux with Reducers were used to
> manage states and authentication. MVC concept applied. I am new to react and redux. Still learning and challenging myself. This is first time I have used redux.The goal and main feature of the app is to present
> the game made with phaser technology.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## App Information

Packages included in this project:

Node.js

express,
mongoose,
body-parser,
bycryptjs,
concurrently,
gravatar,
jsonwebtoken,
passport,
passport-jwt,
validator,
nodemon

React-client:

axios,
classnames,
jwt-decode,
react-redux,
react-router-dom,
redux,
redux-thunk

Helpful chrome extensions:

React Dev Tools,
Redux Dev Tools
