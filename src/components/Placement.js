import React, { Component } from "react"
import Grille from "./Grille"
import "../App.css"

class Start extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Place your boats</h1>
        </header>
        <button id="rotate-button" className="mx-auto">
          Rotate
        </button>
        <div className="container text-center">
          <Grille />
          <button
            type="button"
            value="patrolBoat"
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Patrol Boat
          </button>
          <button
            type="button"
            value="submarine"
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Submarine
          </button>
          <button
            type="button"
            value="destroyer"
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Destroyer
          </button>
          <button
            type="button"
            value="battleship"
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Battleship
          </button>
          <button
            type="button"
            value="carrier"
            onClick={(e) => {
              this.boatSelection(e)
            }}
          >
            Carrier
          </button>
        </div>
        <button
          id="placement-done-button"
          className="green-button"
          onClick={this.props.placementDone}
        >
          GO
        </button>
      </div>
    )
  }
}

export default Start
