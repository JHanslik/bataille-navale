import React, { Component } from "react"
import Grille from "./Grille"
import "../App.css"

class Start extends Component {
  render() {
    return (
      <div>
        <h2 className="text-white">Place your boats</h2>

        <div className="container text-center">
          <Grille />
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
