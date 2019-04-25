# MERN Fury Phaser Game and CRUD Profile w JWT Auth and Redux

# Phaser Tank Game with Membership Portal

> MERN Fury is a lightweight turn based game made with the Phaser javascript engine framework for 2D HTML5 browser games. The game is accessible
> through a player membership portal which requires a name, email and password to join. Once registered the new user is redirected to the login
> form that takes them to their player dashboard. All of the members features are available from this interface to add/update a profile, list your
> favorite game links, skill set, and, access to play MERN Fury. Membership profiles are viewable by the public and are not required to be logged
> into view. Profile portal network was built with the MERN stack technology, JWT authentication, and Redux.
> Authentication is managed by Passport and JWT Token creation while Redux manages this across states. Concurrently was installed to create
> an easier way to start up both the node.js and react client servers together for faster development.
> Designed database models using MongoDB and Mongoose then user api routes and authentication were built and tested with Postman. The Frontend was
> made with react and bootstrap. React Router and Redux with Reducers were used to manage states and authentication. MVC concepts were applied.
> The game was made with phaser technology utilizing it's built in Arcade physics engine and WebGL with Canvas to create fast rendering. This is
> is all connected and powered from a google firebase database using device orientation sensors to use a smartphone as an optional controller.
> Some challenges in developing the game included resolving land and vehicle destruction issues, controller syncronization and state sequence.
>
> Here is link to demo of working app: https://quiet-refuge-58696.herokuapp.com/login

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
