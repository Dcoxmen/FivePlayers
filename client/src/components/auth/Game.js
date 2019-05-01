import React, { Component } from "react";
class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game Instructions</h1>
        <ul>
          <li>
            {" "}
            First, one player opens the start game window by clicking the Start
            Game link.
          </li>
          <li>
            All other players access the activate controller link from their
            phones to use the phone as a controller and to join a space in the
            game.
          </li>
          <li>
            Position your tank turret by tilting your phone left or right to
            choose which direction to shoot
          </li>
          <li>
            Press large button and hold the large button on right of controller
            to power your tank and let go of button to fire
          </li>
          <li>
            Scan game scene left and right with arrow buttons on left of
            controller
          </li>
        </ul>
      </div>
    );
  }
}
export default Game;
